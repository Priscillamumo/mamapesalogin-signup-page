import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';

const Signup = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      setErrorMessage('');
      // Submit the form
      console.log('Form submitted', formValues);
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" />
      <p style={{ textAlign: 'center' }}><b>Access loans and finances with ease</b></p>

      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <label htmlFor="firstName"><b>First Name</b></label>
        <input
          type="text"
          placeholder="First name as per ID"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName"><b>Last Name</b></label>
        <input
          type="text"
          placeholder="Last name as per ID"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          required
        />
        <label htmlFor="idNumber"><b>ID Number</b></label>
        <input
          type="text"
          placeholder="Enter ID Number"
          name="idNumber"
          value={formValues.idNumber}
          onChange={handleChange}
          required
        />
        <label htmlFor="email"><b>Email Address</b></label>
        <input
          type="email"
          placeholder="Enter your email address"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="phoneNumber"><b>Phone Number</b></label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleChange}
          required
        />
        <label htmlFor="password"><b>Password</b></label>
        <input
          type="password"
          id="password"
          placeholder="At least 8 characters"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="confirmPassword"><b>Confirm Password</b></label>
        <input
          type="password"
          id="confirm_password"
          placeholder="Should be the same as above"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleChange}
          required
        />

        <div id="error-message" style={{ color: 'red', marginTop: '10px' }}>
          {errorMessage}
        </div>

        <p className="links">
          <input type="checkbox" style={{ marginBottom: '15px' }} required /> I agree to the terms and conditions
        </p>
        <button type="submit">Sign Up</button>
      </form>

      <p className="links">
        Already have an account? <button onClick={() => navigate('/login')}>Log in</button>
      </p>
    </div>
  );
};

export default Signup;
