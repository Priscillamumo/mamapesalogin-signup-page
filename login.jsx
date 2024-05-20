import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call to authenticate the user)
    console.log('Form submitted with values:', formValues);
    // On successful login, navigate to another page
    navigate('/signup'); // Adjust the route as necessary
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" />
      <p style={{ textAlign: 'center' }}><b>Access loans and finances with ease</b></p>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email"><b>Email Address or Phone Number</b></label>
        <input
          type="text"
          placeholder="Enter Your Email Address"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className="links">
        Don't have an account? <button type="button" onClick={() => navigate('/signup')}>Sign Up</button>
      </p>
    </div>
  );
}

export default Login;
