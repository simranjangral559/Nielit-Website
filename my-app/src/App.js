
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import './styles.css';

import Home from './pages/Home';
import About from './pages/About';
import StudentActivity from './pages/StudentActivity';
import Gallery from './pages/Gallery';
import ContactQuery from './pages/ContactQuery';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import SignupPage from './pages/SignupPage';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Appointmentpage from './pages/Appointmentpage';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/studentactivity" element={<StudentActivity />} />
        <Route path="/gallery" element={<Gallery />} />
        
        <Route path="/ContactQuery" element={<ContactQuery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signupage" element={<SignupPage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Appointmentpage" element={<Appointmentpage />} />
      </Routes>
    </Router>
  );
}

export default App;
