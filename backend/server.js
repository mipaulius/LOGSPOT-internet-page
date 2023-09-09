const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Your existing route
app.get('/', (req, res) => {
  res.send('Hello from your Express.js server!');
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  
  // Here, you can access the form data in the 'formData' variable.
  // You can now implement code to send this data via email.

  // Example code to send an email using nodemailer
  // (Make sure to configure nodemailer with your email service)
  // const transporter = nodemailer.createTransport({ /* ... */ });
  // const mailOptions = { /* ... */ };
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error('Error sending email:', error);
  //     res.status(500).json({ error: 'An error occurred while sending the email.' });
  //   } else {
  //     console.log('Email sent:', info.response);
  //     res.status(200).json({ message: 'Form submitted successfully!' });
  //   }
  // });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
