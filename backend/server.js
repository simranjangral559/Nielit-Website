const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoUri = process.env.MONGO_URI;


const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoUri = process.env.MONGO_URI;
// const mongoUri = 'mongodb://127.0.0.1:27017/college1';
mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

const User = mongoose.model('User', userSchema);

// Signup route (lowercase to match frontend)
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'Missing fields' });
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already exists' });
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' });
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

// Simple health route
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

// Feedback schema & endpoints (minimal)
const feedbackSchema = new mongoose.Schema({ name: String, email: String, feedback: String, createdAt: { type: Date, default: Date.now } });
const Feedback = mongoose.model('Feedback', feedbackSchema);
app.post('/feedback', async (req, res) => {
  try {
    const fb = new Feedback(req.body);
    await fb.save();
    res.status(201).json({ message: 'Feedback saved' });
  } catch (err) {
    console.error('Feedback error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});
app.get('/api/feedbacks', async (req, res) => {
  try {
    const list = await Feedback.find().sort({ _id: -1 }).limit(50);
    res.json({ success: true, feedbacks: list });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
app.get('/api/feedback/count', async (req, res) => {
  try {
    const total = await Feedback.countDocuments();
    res.json({ success: true, total });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Contact schema
const contactSchema = new mongoose.Schema({ name: String, email: String, phone: String, message: String, createdAt: { type: Date, default: Date.now } });
const Contact = mongoose.model('Contact', contactSchema);
app.post('/api/contact', async (req, res) => {
  try {
    const c = new Contact(req.body);
    await c.save();
    res.status(201).json({ success: true, message: 'Contact saved' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Appointment schema
const appointmentSchema = new mongoose.Schema({ name: String, email: String, phone: String, doctor: String, date: String, time: String, createdAt: { type: Date, default: Date.now } });
const Appointment = mongoose.model('Appointment', appointmentSchema);
app.post('/store-booking', async (req, res) => {
  try {
    const appt = new Appointment(req.body);
    await appt.save();
    res.status(201).json({ success: true, message: 'Appointment booked' });
  } catch (err) {
    console.error('Appointment error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Registration schema
const registrationSchema = new mongoose.Schema({ firstname: String, lastname: String, fatherhusbandname: String, email: String, date: String, coursename: String, createdAt: { type: Date, default: Date.now } });
const Registration = mongoose.model('Registration', registrationSchema);
app.post('/registration', async (req, res) => {
  try {
    const reg = new Registration(req.body);
    await reg.save();
    res.status(201).json({ success: true, message: 'Registration saved' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
