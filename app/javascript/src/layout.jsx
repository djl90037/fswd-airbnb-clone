// layout.jsx
import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper'
import Dropdown from 'react-bootstrap/Dropdown'

import './home.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      username: '',
    }
  }

  componentDidMount() {
    fetch('/api/authenticated')
    .then(handleErrors)
    .then(data => {
      this.setState({
        authenticated: data.authenticated,
        username: data.username,
      })
    })
  }


  logout = e => {
    e.preventDefault();

    fetch('/api/sessions', safeCredentials({
      method: 'DELETE',
    }))
    .then(handleErrors)
    .then(data => {
      this.setState({
        authenticated: false,
      })
      window.location = '/';
    })
    .catch(error => {
      this.setState({
        error: 'Logout failed',
      })
    })
  }

  render() {

    const {authenticated, username} = this.state;
    
    return (
      <React.Fragment>
        {(authenticated) ?

          <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand text-danger" href="/">Airbnb</a>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <a className="btn btn-bookings p-2 mx-2" role="button" href={`/${username}/bookings`}>Bookings</a>
                
                
                <Dropdown>
                  <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                    Hosting options
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href={`/${username}/add-property`}>Add new property</Dropdown.Item>
                    <Dropdown.Item href={`/${username}/listings`}>Listings</Dropdown.Item>
                    <Dropdown.Item href={`/${username}/reservations`}>Reservations</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
              </div>
              <button type='submit' className='btn btn-sm btn-outline-danger btn-logout' onClick={this.logout}>Logout</button>
            </div>

          </nav>

        :

        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand text-danger" href="/">Airbnb</a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                </ul>
              </div>
            <a className='btn btn-sm btn-danger btn-login' href={`/login?redirect_url=${window.location.pathname}`}>Login</a>
            </div>
          </nav>
      
      }
        {this.props.children}
        <footer className="p-3 bg-light">
          <div>
            <p className="me-3 mb-0 text-secondary">Airbnb Clone</p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Layout;