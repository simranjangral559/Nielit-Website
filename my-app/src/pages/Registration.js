import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    fatherhusbandname: '',
    email: '',
    date: '',
    coursename: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (Object.values(formData).some(field => !field)) {
      alert("Please fill out all fields.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      // First check if the response is OK
      if (!response.ok) {
        // Try to parse error response as JSON
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to complete registration");
      }
  
      // Parse successful response as JSON
      const data = await response.json();
      
      alert(data.message || "Registration successful!");
      setFormData({
        firstname: '',
        lastname: '',
        fatherhusbandname: '',
        email: '',
        date: '',
        coursename: '',
      });
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Error during registration");
    }
  };

  return (
    <div className="appointment-container">
      <h1>Register Yourself</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Lastname Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Father/Husband Name:</label>
          <input
            type="text"
            id="fatherhusbandname"
            name="fatherhusbandname"
            value={formData.fatherhusbandname}
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
          <label htmlFor="cousename">Course:</label>
          <select
            id="coursename"
            name="coursename"
            value={formData.coursename}
            onChange={handleChange}
            required
          >
            <option value="">Select Cousename</option>
            <option value="Btech">B.tech</option>
            <option value="M.tech">M.tech</option>
            <option value="B.com">B.com</option>
            <option value="M.com">M.com</option>

            
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

       

        <button type="submit">Register Yourself</button>
      </form>
    </div>
  );
};

export default Registration;
