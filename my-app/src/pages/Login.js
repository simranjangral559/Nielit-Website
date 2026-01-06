import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      try {
        const response = await fetch('https://nielit-website.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('Login successful!');
          navigate('/dashboard');
          // You can also store the user info in localStorage or state management here
        } else {
          alert(data.error || 'Login failed');
        }
      } catch (error) {
        alert('Network error. Please try again later.');
        console.error('Error:', error);
      }
    } else {
      alert('Please fill out both fields.');
    }
  };

  return (
    <div className="LoginPage">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="Login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>

      <section className="footer">
        <footer>Copyright &copy; by Preeti</footer>
      </section>
    </div>
  );
};

export default Login;
