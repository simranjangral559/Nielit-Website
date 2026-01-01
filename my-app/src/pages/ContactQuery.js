import React,{ useState } from "react";
const ContactQuery = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          if (response.ok) {
            alert(data.message); // Success message from server
            setFormData({ name: '', email: '', phone: '', message: '' });
          } else {
            alert(data.error || 'Failed to submit form.');
          }
        } catch (error) {
          alert('Network error. Please try again.');
          console.error('Submission error:', error);
        }
      };
    return (
        <div className="ContactQuery">
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="Contact-form">
                <div className="form-group">
                    <label htmlFor="name" id="newcouse">Name:</label>
                    <input type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLenght="2"         
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                    id="emaill"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    <div className="phone">
                        <label htmlFor="phone">Mobile No.</label>
                        <input type="number"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        minLength="10"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        minLength="10"
                        />    
                    </div>
                    </div>
<button type="submit">Send Message</button>        
            </form></div>
            <section className='footer'>
                <footer>Copyright &copy; by Preeti</footer>
            </section>
        
            </div>
    )
}

export default ContactQuery;