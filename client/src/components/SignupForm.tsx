import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Form, Button, Alert } from "react-bootstrap";

// import { createUser } from '../utils/API';
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";

import Auth from "../utils/Auth";
import type { User } from "../models/User";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
const SignupForm = ({}: { handleModalClose: () => void }) => {
  const [createUser] = useMutation(CREATE_USER);

  // set initial form state
  const [userFormData, setUserFormData] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipcode: null,
    role: "customer",
    cartProducts: [],
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      // const response = await createUser(userFormData);
      const response = await createUser({
        variables: {
          firstName: userFormData.firstName,
          lastName: userFormData.lastName,
          email: userFormData.email,
          phoneNumber: userFormData.phoneNumber,
          address: userFormData.address,
          state: userFormData.state,
          zipcode: userFormData.zipcode,
          password: userFormData.password,
        },
      });

      // if (!response.ok) {
      //   throw new Error('something went wrong!');
      // }

      // const { token } = await response.json();
      const token = response.data.createUser.token;

      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zipcode: null,
      role: "customer",
      cartProducts: [],
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleInputChange}
            value={userFormData.firstName || ""}
            required
          />
          <Form.Control.Feedback type="invalid">
            First Name is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Control
            type="lastName"
            placeholder="Last Name"
            name="lastName"
            onChange={handleInputChange}
            value={userFormData.lastName || ""}
            required
          />
          <Form.Control.Feedback type="invalid">
            Last Name is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email || ""}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={handleInputChange}
            value={userFormData.phoneNumber || ""}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="address">Address</Form.Label>
          <Form.Control
            type="address"
            placeholder="Street Address"
            name="address"
            onChange={handleInputChange}
            value={userFormData.address || ""}
            required
          />
          <Form.Control.Feedback type="invalid">
            address is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="city">City</Form.Label>
          <Form.Control
            type="city"
            placeholder="City"
            name="city"
            onChange={handleInputChange}
            value={userFormData.city || ""}
            required
          />
          <Form.Control.Feedback type="invalid">
            City is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="state">State</Form.Label>
          <Form.Control
            type="state"
            placeholder="State"
            name="state"
            onChange={handleInputChange}
            value={userFormData.state || ""}
            required
          />
          <Form.Control.Feedback type="invalid">
            State is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="zipcode">Zip Code</Form.Label>
          <Form.Control
            type="zipcode"
            placeholder="Zip Code"
            name="zipcode"
            onChange={handleInputChange}
            value={userFormData.zipcode || ""}
            required
          />
          <Form.Control.Feedback type="invalid">
            Zip code is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password || ""}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(
              userFormData.firstName &&
              userFormData.lastName &&
              userFormData.email &&
              userFormData.phoneNumber &&
              userFormData.address &&
              userFormData.state &&
              userFormData.zipcode &&
              userFormData.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
