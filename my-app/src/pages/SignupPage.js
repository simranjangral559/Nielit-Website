import React, { useState } from "react";


const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.password && formData.confirmPassword) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        });

        if (response.ok) {
          alert('Sign up successful! Please log in.');
          setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        } else {
          alert('Error signing up. Please try again.');
        }
      } catch (error) {
        alert('Network error. Please try again later.');
        console.error('Error:', error);
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="SignUpPage">
      <div className="sign-up-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className="SignUp-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required minLength="2" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required minLength="6" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required minLength="6" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <section className='footer'>
        <footer>© Preeti</footer>
      </section>
    </div>
  );
};

export default SignUpPage;
