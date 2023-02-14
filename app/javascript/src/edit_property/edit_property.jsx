import React from 'react';
import Layout from '@src/layout';
import { handleErrors, safeCredentialsFormData } from '@utils/fetchHelper';
import './edit_property.scss';

class EditProperty extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
    }
  }

  componentDidMount() {
    this.getUserListings()
  }

  getUserListings() {
    fetch(`/api/properties/${this.props.data.property_id}`)
    .then(handleErrors)
    .then(data => {
      console.log('data: ', data);
      this.copyPropertyAttributes(data.property);
    })
  }

  copyPropertyAttributes = property => {
    for(let attributes in property) {
      this.setState({
        [attributes]: property[attributes],
      })
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  updatePropertyAttributes = e => {
    e.preventDefault();

    let formData = new FormData();

    formData.append('property[title]', this.state.title)
    formData.append('property[description]', this.state.description)
    formData.append('property[city]', this.state.city)
    formData.append('property[country]', this.state.country)
    formData.append('property[property_type]', this.state.property_type)
    formData.append('property[max_guests]', this.state.max_guests)
    formData.append('property[bedrooms]', this.state.bedrooms)
    formData.append('property[beds]', this.state.beds)
    formData.append('property[baths]', this.state.baths)
    formData.append('property[price_per_night]', this.state.price_per_night)
    
    fetch(`/api/properties/${this.props.data.property_id}`, safeCredentialsFormData ({
      method: 'PATCH',
      body: formData,
    }))
    .then(handleErrors)
    .then(data => {
      console.log('data: ', data)
      this.setState({
        username: data.property.user.username,
      })

      const params = new URLSearchParams(window.location.search)
      const redirect_url = params.get('redirect_url') || `/${this.state.username}/listings`
      window.location = redirect_url
    })
    .catch(error => {
      this.setState({
        error: 'could not edit property. try again later'
      })
    })
  }

  render() {
    const { title, description, city, country, property_type, max_guests, bedrooms, beds, baths, price_per_night, error } = this.state;
    return(
      <Layout>
        <div className="container py-4">
          <h4 className="mb-1">Edit property</h4>
          <br/>
          <p className="mb-4 text-secondary">Please edit your property</p>
          <form className="py-4 form-property" onSubmit={this.updatePropertyAttributes}>
            <div className="row g-3 align-items-center py-2">
              <div classname="col-7">
                <label htmlFor="propertyTitle" className="col-form-label">Property title</label>
              </div>
              <div className="col-auto">
                <textarea id="propertyTitle" cols="30" rows="2" className="form-control" name="title" value={title || ''} onChange={this.handleChange}></textarea>
              </div>
            </div>

            <div className="row g-3 align-items-center py-2">
              <div classname="col-7">
                <label htmlFor="propertyDescription" className="col-form-label">Property description</label>
              </div>
              <div className="col-auto">
                <textarea id="propertyDescription" cols="30" rows="2" className="form-control" name="description" value={description || ''} onChange={this.handleChange}></textarea>
              </div>
            </div>

            <div className="row g-3 align-items-center py-2">
              <div classname="col-7">
                <label htmlFor="propertyCity" className="col-form-label">City</label>
              </div>
              <div className="col-auto">
                <textarea id="propertyCity" cols="30" rows="2" className="form-control" name="city" value={city || ''} onChange={this.handleChange}></textarea>
              </div>
            </div>

            <div className="row g-3 align-items-center py-2">
              <div classname="col-7">
                <label htmlFor="propertyCountry" className="col-form-label">Country</label>
              </div>
              <div className="col-auto">
                <textarea id="propertyCountry" cols="30" rows="2" className="form-control" name="country" value={country || ''} onChange={this.handleChange}></textarea>
              </div>
            </div>

            <div className="row g-3 align-items-center py-2">
              <div classname="col-7">
                <label htmlFor="propertyType" className="col-form-label">Property type</label>
              </div>
              <div className="col-auto">
                <textarea id="propertyType" cols="30" rows="2" className="form-control" name="property_type" value={property_type || ''} onChange={this.handleChange}></textarea>
              </div>
            </div>

            <div className="row g-3 align-items-center py-2">
              <div classname="col-7">
                <label htmlFor="propertyMaxGuest" className="col-form-label">Maximum guests</label>
              </div>
              <div className="col-auto">
                <textarea id="propertyMaxGuest" cols="30" rows="2" className="form-control" name="max_guests" value={max_guests || ''} onChange={this.handleChange}></textarea>
              </div>
            </div>

            <div className="row g-3 align-items-center py-2">
              <div classname="col-7">
                <label htmlFor="propertyBedrooms" className="col-form-label">Bedrooms</label>
              </div>
              <div className="col-auto">
                <textarea id="propertyBedrooms" cols="30" rows="2" className="form-control" name="bedrooms" value={bedrooms || ''} onChange={this.handleChange}></textarea>
              </div>
            </div>

            <div className="row g-3 align-items-center py-2">
              <div classname="col-7">
                <label htmlFor="propertyBeds" className="col-form-label">Beds</label>
              </div>
              <div className="col-auto">
                <textarea id="propertyBeds" cols="30" rows="2" className="form-control" name="beds" value={beds || ''} onChange={this.handleChange}></textarea>
              </div>
            </div>

            <div className="row g-3 align-items-center py-2">
              <div classname="col-7">
                <label htmlFor="propertyBaths" className="col-form-label">Baths</label>
              </div>
              <div className="col-auto">
                <textarea id="propertyBaths" cols="30" rows="2" className="form-control" name="baths" value={baths || ''} onChange={this.handleChange}></textarea>
              </div>
            </div>

            <div className="row g-3 align-items-center py-2">
              <div classname="col-7">
                <label htmlFor="propertyPricePerNight" className="col-form-label">Price per night</label>
              </div>
              <div className="col-auto">
                <textarea id="propertyPricePerNight" cols="30" rows="2" className="form-control" name="price_per_night" value={price_per_night || ''} onChange={this.handleChange}></textarea>
              </div>
            </div>
            <div className="d-flex justify-content-center mx-auto my-5">
              <button type="submit" className="btn btn-edit-property w-25"><b>Update property</b></button>
              {error && <p className="text-danger mt-2">{error}</p>}
            </div>
            
          </form>

        </div>
      </Layout>
    )
  }
  
}

export default EditProperty