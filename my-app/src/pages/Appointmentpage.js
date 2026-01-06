import React, { useState } from "react";

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    time: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.doctor ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("https://nielit-website.onrender.com/Appointmentpage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await response.json(); // Just handle the response without storing it in `result`
        alert("Appointment booked successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          doctor: '',
          date: '',
          time: '',
        });
      } else {
        alert("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(" booking appointment.");
    }
  };

  return (
    <div className="appointment-container">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
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
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            minLength="10"
          />
        </div>

        <div className="form-group">
          <label htmlFor="doctor">Doctor:</label>
          <select
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Select Teacher</option>
            <option value="Dr. Sarwan Singh">Dr. Sarwan Singh</option>
            <option value="Dr. Anita Budhiraja">Dr. Anita Budhiraja</option>
            <option value="Dr. Swetha Sharma">Dr. Swetha Sharma</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Appointment Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Appointment Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentPage;
