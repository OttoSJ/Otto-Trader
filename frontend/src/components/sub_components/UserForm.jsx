import React from 'react'
import { Row, Col } from 'react-bootstrap'

function UserForm({ onChange }) {
  return (
    <section className="row g-3 mt-3">
      <div className="col-6 ">
        <label htmlFor="firstname" className="form-label">
          First Name
        </label>
        <input
          autoFocus
          type="text"
          className="form-control"
          name="firstname"
          id="firstname"
          placeholder="First Name"
          onChange={onChange}
        />
      </div>
      <div className="col-6">
        <label htmlFor="lastname" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          name="lastname"
          id="lastname"
          placeholder="Last Name"
          onChange={onChange}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          placeholder="Password"
          onChange={onChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="password2" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password2"
          id="password2"
          placeholder="Confirm Password"
          onChange={onChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="username"
          className="form-control"
          name="username"
          id="username"
          placeholder="Username"
          onChange={onChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          placeholder="Email"
          onChange={onChange}
        />
      </div>

      <div className="col-12">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          name="address"
          id="address"
          placeholder="1234 Main St"
          onChange={onChange}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          name="city"
          id="city"
          placeholder="City"
          onChange={onChange}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="state" className="form-label">
          State
        </label>
        <select
          id="state state-list"
          name="state"
          className="form-select"
          onChange={onChange}
        >
          <option value="Choose">Choose...</option>

          <option value="AK">Alaska</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CT">Connecticut</option>
          <option value="CO">Colorado</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="IA">Iowa</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="MA">Massachussets</option>
          <option value="MD">Maryland</option>
          <option value="ME">Maine</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MO">Missouri</option>
          <option value="MS">Mississippi</option>
          <option value="MT">Montana</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="NE">Nebraska</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NV">Nevada</option>
          <option value="NY">New York</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VA">Virginia</option>
          <option value="VT">Vermont</option>
          <option value="WA">Washington</option>
          <option value="WI">Wisconsin</option>
          <option value="WV">West Virginia</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
      <div className="col-md-3">
        <label htmlFor="zip" className="form-label">
          Zip
        </label>
        <input
          type="text"
          className="form-control"
          name="zip"
          id="zip"
          placeholder="Zip Code"
          onChange={onChange}
        />
      </div>
    </section>
  )
}

export default UserForm
