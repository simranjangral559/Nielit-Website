import React, { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    feedback: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.name && formData.email && formData.phone && formData.feedback) {
      try {
        const response = await fetch('https://nielit-website.onrender.com/Feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          alert('Thank you for your feedback! We will get back to you soon.');
          setFormData({ name: '', email: '', phone: '', feedback: '' });
        } else {
          alert('There was an error submitting your feedback. Please try again.');
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
    <div className="ContactQuery">
      <div className="contact-container">
        <h1>Feedback Form</h1>
        <form onSubmit={handleSubmit} className="Contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength="2"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Mobile No.:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              minLength="10"
            />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              minLength="10"
            />
          </div>
          <button type="submit">Send Feedback</button>
        </form>
      </div>

      <section className='footer'>
        <footer>Copyright &copy; by Preeti</footer>
      </section>
    </div>
  );
};

export default Feedback;
