import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';

import './successful_booking.scss';

class SuccessfulBooking extends React.Component {
  state = {
    booking: {},
    nights_booked: null,
    subtotal: null,
    total: null,
    loading: true,
  }

  componentDidMount() {
    const booking_id = this.props.booking_id;
    console.log(booking_id)

    fetch(`/api/bookings/${booking_id}`)
      .then(handleErrors)
      .then(data => {
        console.log('data:', data)
        let startDate = new Date(data.booking.start_date);
        let endDate = new Date(data.booking.end_date);
        let dateDifference = Math.abs(endDate - startDate)
        let differenceResult = Math.ceil(dateDifference / (1000 * 60 * 60 * 24))
        this.setState({...this.state, nights_booked: differenceResult})

        const getNightVal = this.state.nights_booked
        const subtotal = data.booking.property.price_per_night * getNightVal

        this.setState({
          booking: data.booking,
          nights_booked: getNightVal,
          subtotal: subtotal,
          total: subtotal,
          loading: false,
        })
      })
  }

  render () {
    const { booking, nights_booked, subtotal, total, loading } = this.state;

    if (loading) {
      return <p>loading...</p>;
    };

    const {
      id,
      start_date,
      end_date,
      property,
      user,
    } = booking

    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-6 my-4">
              <div className="p-4">
                <h2>Congrats!</h2>
                <h3>Your booking was successful</h3>
                <br/>
                <p>Your reservation is confirmed. We've sent your confirmation to {user.email}</p>
              </div>
            </div>
            <div className="col-6 my-4 p-4">
              <div className="booking-border p-4">
                <div>
                  <div className="property-image mb-3" style={{ backgroundImage: `url(${property.image})` }} />
                  <div className="booking-box">
                    <h6><b>{property.title}</b></h6>
                    <p>{property.property_type} in {property.city}</p>
                  </div>
                  <div className="booking-box">
                    <div className="d-flex justify-content-between">
                      <p>${property.price_per_night}.00 x {nights_booked} nights</p>
                      <p><b>${subtotal}</b></p>
                    </div>
                  </div>
                  <div className="booking-box d-flex justify-content-between">
                    <p><b>Total</b></p>
                    <p><b>{total}.00</b></p>
                  </div>
                  <p><b>Free cancellation</b></p>
                  <p>Please cancel within 48 hours for a full refund</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default SuccessfulBooking