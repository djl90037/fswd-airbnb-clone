import React from 'react';
import Layout from '@src/layout';
import { safeCredentialsFormData, handleErrors } from '@utils/fetchHelper';
import './add_property.scss';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      city: '',
      country: '',
      property_type: '',
      max_guests: '',
      bedrooms: '',
      beds: '',
      baths: '',
      price_per_night: '',
      image: null,
      error: '',
      username: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  addFile = e => {
    this.setState({
      [e.target.name]: e.target.files[0],
    })
  }

  addProperty = e => {
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

    if (this.state.image !== null) {
      formData.append('property[image]', this.state.image, this.state.image.name)
    }

    console.log(formData)

    fetch('/api/properties', safeCredentialsFormData({
      method: 'POST',
      body: formData,
    }))
    .then(handleErrors)
    .then(data => {
      console.log('data: ', data);
      this.setState({
        username: data.property.user.username,
      })

      const params = new URLSearchParams(window.location.search)
      const redirect_url = params.get('redirect_url') || `/${this.state.username}/listings`
      window.location = redirect_url
    })
    .catch(error => {
      this.setState({
        error: "failed to add property, please try again"
      })
    })
  }

  render() {
    const { title, description, city, country, property_type, max_guests, bedrooms, beds, baths, price_per_night, image, error } = this.state;

    return(
      <Layout>
        <div className="container py-4">
          <h4 className="mb-1">Add a property</h4>
            <br/>
          <p className="mb-4 text-secondary">Please complete the form below to list a new property</p>
          <form className="py-3 form-property" onSubmit={this.addProperty}>
            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
                <h6>What is the name of your place?</h6>
              </div>
              <div className="col-5">
                <input type="text" id="propertyTitle" className="form-control" name="title" value={title} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row g-3 align-items-center py-2">
              <div className="col-4">
                <h6>Create a description of your place</h6>
              </div>
              <div className="col-5">
                <textarea id="propertyDescription" className="form-control" name="description" value={description} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row g-3 align-items center py-2">
              <div className="col-4">
                <h6>In what city is it located?</h6>
              </div>
              <div className="col-5">
                <input type="text" id="propertyCity" className="form-control" name="city" value={city} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row g-3 align-items center py-2">
              <div className="col-4">
                <h6>In what country is it located?</h6>
              </div>
              <div className="col-5">
                <input type="text" id="propertyCountry" className="form-control" name="country" value={country} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row g-3 align-items center py-2">
              <div className="col-4">
                <h6>What type of property is it?</h6>
              </div>
              <div className="col-5">
                <input type="text" id="propertyType" className="form-control" name="property_type" value={property_type} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row g-3 align-items center py-2">
              <div className="col-4">
                <h6>How many guests will it accomodate?</h6>
              </div>
              <div className="col-5">
                <input type="number" id="maxGuests" className="form-control" name="max_guests" value={max_guests} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row g-3 align-items center py-2">
              <div className="col-4">
                <h6>How many bedrooms?</h6>
              </div>
              <div className="col-5">
                <input type="number" id="bedrooms" className="form-control" name="bedrooms" value={bedrooms} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row g-3 align-items center py-2">
              <div className="col-4">
                <h6>How many beds?</h6>
              </div>
              <div className="col-5">
                <input type="number" id="beds" className="form-control" name="beds" value={beds} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row g-3 align-items center py-2">
              <div className="col-4">
                <h6>How many bathrooms?</h6>
              </div>
              <div className="col-5">
                <input type="number" id="baths" className="form-control" name="baths" value={baths} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row g-3 align-items center py-2">
              <div className="col-4">
                <h6>Please set a nightly rate</h6>
              </div>
              <div className="col-5">
                <input type="number" id="pricePerNight" className="form-control" name="price_per_night" value={price_per_night} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row g-3 align-items center py-2">
              <div className="col-4">
                <h6>Add photos of your place</h6>
              </div>
              <div className="col-5">
                <input type="file" id="propertyImage" className="form-control" name="image" onChange={this.addFile}/>
              </div>
            </div>
            

            <div className="d-flex justify-content-center mx-auto my-5">
              <button type="submit" className="btn btn-add-property w-25" disabled=
              { 
                !title || !description || !city || !country || !property_type || !price_per_night || !max_guests || !bedrooms || !beds || !baths 
              }
              ><b>Submit property</b></button>
            </div>

          </form>
        </div>
      </Layout>
    )
  }
}

export default AddProperty