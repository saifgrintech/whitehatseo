const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your preferred service (e.g., Gmail, Outlook)
  auth: {
    user: process.env.EMAIL_USER, // Email from .env file
    pass: process.env.EMAIL_PASS  // Password from .env file
  }
});

// Function to send an email
const sendEmail = (formData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'ankush.grintech@gmail.com', // Your email for notifications
    subject: 'New Contact Form Submission on Whitehatseo',
  //   html: `
  //   <html>
  //     <body style="font-family: Arial, sans-serif; background-color: #f8f8f8; color: #333; padding:50px 20px ;">
  //       <div style="max-width: 500px; margin: 30px auto; background-color: #fff; padding: 20px; border-radius: 8px;">
  //        <div style="text-align: center; margin-bottom: 20px;">
  //       <img src="https://whitehatseo.in/wp-content/uploads/2022/12/Whitehatseo-1.png" alt="Logo" style="max-width: 150px;" />
  //      </div>
  //         <h2 style="text-align: center; color: #4CAF50;">You have a new contact form submission!</h2>
  //         <p style="font-size: 16px; margin-botom:5px; "><b>Name</b>: ${formData.name}</p>
  //         <p style="font-size: 16px; margin-botom:5px; "><b>Email</b>: ${formData.email}</p>
  //         <p style="font-size: 16px; margin-botom:5px; "><b>Phone Number</b>: ${formData.phone}</p>
  //         <p style="font-size: 16px; margin-botom:5px; "><b>Subject</b>: ${formData.subject}</p>
  //         <p style="font-size: 16px; margin-botom:5px; "><b>Message</b>: ${formData.message}</p>
         
         
  //       </div>
  //     </body>
  //   </html>
  // `,

    text: `You have a new contact form submission:
  
    Name: ${formData.name}
    Email: ${formData.email}
    Contact Number: ${formData.phone}
    Subject: ${formData.subject}
    Message: ${formData.message}`
    
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });

};

module.exports = sendEmail;
