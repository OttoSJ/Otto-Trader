import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

function UserForm({ onChange }) {
  return (
    <Form.Group className="row g-3 mt-3">
      <Row>
        <Col className="mt-5" md={6}>
          <Form.Label htmlFor="firstname" className="form-label">
            First Name
          </Form.Label>
          <Form.Control
            autoFocus
            type="text"
            className="form-control"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            onChange={onChange}
          />
        </Col>
        <Col className="mt-5" md={6}>
          <Form.Label htmlFor="lastname" className="form-label">
            Last Name
          </Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            onChange={onChange}
          />
        </Col>
      </Row>

      <Row>
        <Col className="mt-5" md={6}>
          <Form.Label htmlFor="password" className="form-label">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Password"
            onChange={onChange}
          />
        </Col>
        <Col className="mt-5" md={6}>
          <Form.Label htmlFor="password2" className="form-label">
            Confirm Password
          </Form.Label>
          <Form.Control
            type="password"
            className="form-control"
            name="password2"
            id="password2"
            placeholder="Confirm Password"
            onChange={onChange}
          />
        </Col>
      </Row>
      <Row>
        <Col className="mt-5" md={6}>
          <Form.Label htmlFor="username" className="form-label">
            Username
          </Form.Label>
          <Form.Control
            type="username"
            className="form-control"
            name="username"
            id="username"
            placeholder="Username"
            onChange={onChange}
          />
        </Col>
        <Col className="mt-5" md={6}>
          <Form.Label htmlFor="email" className="form-label">
            Email
          </Form.Label>
          <Form.Control
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Email"
            onChange={onChange}
          />
        </Col>
      </Row>

      <Row>
        <Col className="mt-5" md={12}>
          <Form.Label htmlFor="address" className="form-label">
            Address
          </Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            name="address"
            id="address"
            placeholder="1234 Main St"
            onChange={onChange}
          />
        </Col>
      </Row>
      <Col className="mt-5" md={6}>
        <Form.Label htmlFor="city" className="form-label">
          City
        </Form.Label>
        <Form.Control
          type="text"
          className="form-control"
          name="city"
          id="city"
          placeholder="City"
          onChange={onChange}
        />
      </Col>
      <Col className="mt-5" md={3}>
        <Form.Label htmlFor="state" className="form-label">
          State
        </Form.Label>
        <Form.Select
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
        </Form.Select>
      </Col>
      <Col className="mt-5" md={3}>
        <Form.Label htmlFor="zip" className="form-label">
          Zip
        </Form.Label>
        <Form.Control
          type="text"
          className="form-control"
          name="zip"
          id="zip"
          placeholder="Zip Code"
          onChange={onChange}
        />
      </Col>
    </Form.Group>
  )
}

export default UserForm
