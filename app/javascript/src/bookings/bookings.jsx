import React from 'react';
import Layout from '@src/layout';
import {safeCredentials, handleErrors} from '@utils/fetchHelper';

import './bookings.scss'

class Bookings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userBookings: [],
    }
  }

  componentDidMount() {
    this.getUserBookings();
  }

  getUserBookings() {
    const username = this.props.data.username;
    console.log(username)

    fetch(`/api/users/${username}/bookings`)
    .then(handleErrors)
    .then(data => {
      console.log('data:', data);
      this.setState({
        userBookings: data.bookings,
      })
    })
  }

  totalPrice = (startDate, endDate, nightlyRate) => {
    let nights = new Date(endDate) - new Date(startDate);
    nights = nights / 1000 / 60 / 60 / 24;
    let total = nightlyRate * nights;
    total = total.toFixed(2);
    return total
  }

  render() {
    const {userBookings} = this.state;
    console.log(userBookings)
    return(
      <Layout>
        <div className="container py-4">
          <h4 className="mb-4">My Bookings</h4>
          {(userBookings.length !== 0) ?
          <div>
            {userBookings.map(booking => {
              return(
                <div key={booking.id} id={booking.id} className="bookings-wrap p-4 mb-3">
                  <div className="row d-flex">
                    <div className="col-3">
                      <div className="property-image" style={{ backgroundImage: `url(${booking.property.image})`}}/>
                    </div>
                    <div className="col-5">
                      <div className="row d-flex flex-column px-3">
                        <p className="mb-1 text-secondary">{booking.city}</p>
                        <h6 className="mb-1">{booking.property.title}</h6>
                        <p className="mb-1 text-secondary">Hosted by {booking.property.user.username}</p>
                        <p className="mb-1 text-seconday">{booking.start_date} - {booking.end_date}</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="row d-flex flex-column px-3">
                        <div className="d-flex justify-content-between">
                          <p className="mb-1"><b>Total</b></p>
                          <p className="mb-1"><b>${this.totalPrice(booking.start_date, booking.end_date, booking.property.price_per_night)}</b></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          :
          <div className="py-4 border-secondary rounded text-center">
            <p className="mb-1">You don't have any active bookings.</p>
            <a className="text-danger" href="/">Discover properties</a>
          </div>
          }
        </div>
      </Layout>
    )
  }
}

export default Bookings