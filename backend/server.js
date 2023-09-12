const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://pauliusm:<logspot2019>@cluster0.7s2xjpy.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Define an API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Define more routes as needed for your application

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
