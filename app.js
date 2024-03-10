// Importing nodemailer module
const nodemailer = require('nodemailer');

// Creating a transporter using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider here
    auth: {
        user: 'jincyashna24@gmail.com', // Your email address
        pass: 'phpd dlje fsfo hhgl' // Your email password
    }
});

// Defining email data
let mailOptions = {
    from: 'jincyashna24@gmail.com', // Sender address
    to: 'prannoy4@gmail.com', // List of recipients
    subject: 'Test Email', // Subject line
    text: 'This is a test email sent using Nodemailer.', // Plain text body
    html: '<b>This is a test email sent using Nodemailer.</b>' // HTML body
};

// Sending the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error.message);
        return;
    }
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
});
