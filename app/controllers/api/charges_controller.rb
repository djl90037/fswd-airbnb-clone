module Api
  class ChargesController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:mark_complete]

    def create
      token = cookies.signed[:airbnb_session_token]
      session = Session.find_by(token: token)
      return render json: { error: 'user not logged in' }, status: :unauthorized if !session

      booking = Booking.find_by(id: params[:booking_id])
      return render json: { error: 'cannot find booking' }, status: :not_found if !booking

      property = booking.property
      days_booked = (booking.end_date - booking.start_date).to_i
      amount = days_booked * property.price_per_night

      session = Stripe::Checkout::Session.create(
        payment_method_types: ['card'],
        line_items: [{
          price_data: {
            currency: 'usd',
            unit_amount: (amount * 100.0).to_i, # amount in cents
            product_data: {
              name: "Trip for #{property.title}",
              description: "your booking is for #{booking.start_date} to #{booking.end_date}.",
            },
          },
          quantity: 1,
        }],
        mode: "payment",
        success_url: "#{ENV['URL']}/bookings/#{booking.id}/success",
        cancel_url: "#{ENV['URL']}#{params[:cancel_url]}",
      )

      @charge = booking.charges.new({
        checkout_session_id: session.id,
        currency: 'usd',
        amount: amount
      })

      if @charge.save
        render 'api/charges/create', status: :created
      else
        render json: { error: 'charge could not be created' }, status: :bad_request
      end
    end

    def mark_complete
      # find your endpoint's secret in your webhook setings
      endpoint_secret = ENV['STRIPE_MARK_COMPLETE_WEBHOOK_SIGNING_SECRET']

      event = nil

      # verify webhook and extract the event
      # see https://stripe.com/docs/webhooks/signatures for more information.
      begin
        sig_header = request.env['HTTP_STRIPE_SIGNATURE']
        payload = request.body.read
        event = Stripe::Webhook.construct_event(
          payload, sig_header, endpoint_secret
        )
      rescue JSON::ParserError => e
        # invalid payload
        return head :bad_request
      rescue Stripe::SignatureVerificationError => e
        # invalid signature
        return head :bad_request
      end

      # handle the checkout.session.completed event
      if event['type'] == 'checkout.session.completed'
        session = event['data']['object']

        # Fufill the purchase, mark related charge as complete
        charge = Charge.find_by(checkout_session_id: session.id)
        return head :bad_request if !charge

        charge.update({ complete: true })

        return head :ok
      end

      return head :bad_request
    end
  end
end