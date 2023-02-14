Rails.application.routes.draw do
  root to: 'static_pages#home'

  # Static pages

  get '/property/:id'                             => 'static_pages#property'
  get '/login'                                    => 'static_pages#login'
  get '/:username/bookings'                       => 'static_pages#bookings'
  get '/bookings/:id/success'                     => 'static_pages#successful_booking'
  get '/:username/add-property'                   => 'static_pages#add_property'
  get '/:username/listings'                       => 'static_pages#listings'
  get '/:username/reservations'                   => 'static_pages#reservations'
  get '/property/:id/edit-property'               => 'static_pages#edit_property'

  namespace :api do
    # Add routes below this line

    # users 
    post '/users'                                 => 'users#create'
    # resources :users, only: [:create]

    # sessions
    post '/sessions'                              => 'sessions#create'
    delete '/sessions'                            => 'sessions#destroy'
    get '/authenticated'                          => 'sessions#authenticated'

    # resources :sessions, only: %i[create destroy]

    # properties
    post '/properties'                            => 'properties#create'
    get '/properties'                             => 'properties#index'
    get '/properties/:id'                         => 'properties#show'
    get '/users/:username/properties'             => 'properties#index_by_user'
    # resources :properties, only: [:index, :show]


    resources :charges, only: [:create]

    # bookings
    resources :bookings, only: [:create, :show]

    get '/users/:username/bookings'                => 'bookings#index_by_user'
    get '/users/:username/properties/bookings'     => 'bookings#get_user_properties_bookings'
    get '/properties/:id/bookings'                 => 'bookings#get_property_bookings'
    

    # stripe webhook
    post '/charges/mark_complete'                  => 'charges#mark_complete'
  end
end
