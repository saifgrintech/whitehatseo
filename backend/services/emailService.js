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

// Function to send notification  email
const sendEmail = (formData) => {

  // Email notification to you
  const mailOptions = {
    from: process.env.EMAIL_USER,
    // to: 'ankush.grintech@gmail.com', // Your email for notifications
    // to: 'info@whitehatseo.in', 
    to: 'rajesh.rbgroup@gmail.com', 
    subject: 'New Contact Form Submission on Whitehatseo',
    html: `
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f8f8f8; color: #333; padding: 50px 20px; margin:0;">
        <div style="max-width: 500px; margin: 30px auto; background-color: #000; padding: 20px; border-radius: 8px; color: #fff;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://whitehatseo.in/images/white_logo.png" alt="Logo" style="max-width: 130px;" />
          </div>
          <h2 style="text-align: center; color: #0d96de;">You have a new contact form submission!</h2>
          <p style="font-size: 16px; margin-bottom: 8px;"><b>Name:</b> ${formData.name}</p>
          <p style="font-size: 16px; margin-bottom: 8px;"><b>Email:</b> ${formData.email}</p>
          <p style="font-size: 16px; margin-bottom: 8px;"><b>Phone Number:</b> ${formData.phone}</p>
          <p style="font-size: 16px; margin-bottom: 8px;"><b>Subject:</b> ${formData.subject}</p>
          <p style="font-size: 16px; margin-bottom: 8px;"><b>Message:</b> ${formData.message}</p>
        </div>
      </body>
    </html>

  `,

    // text: `You have a new contact form submission:
  
    // Name: ${formData.name}
    // Email: ${formData.email}
    // Contact Number: ${formData.phone}
    // Subject: ${formData.subject}
    // Message: ${formData.message}`

  };

   // Thank-you email to the user
   const thankYouOptions = {
    from: process.env.EMAIL_USER,
    to: formData.email, // User's email
    subject: 'Thank You for Contacting Whitehatseo',
    html: `
     <html>
      <body style="font-family: Arial, sans-serif; background-color: #f8f8f8; color: #fff; padding: 50px 20px; margin:0;">
        <div style="max-width: 500px; margin: 30px auto; background-color: #000; padding: 20px; border-radius: 8px; color: #fff;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://whitehatseo.in/images/white_logo.png" alt="Logo" style="max-width: 130px;" />
          </div>
          <h2 style="text-align: center; color: #0d96de;">Thank You for Contacting Us!</h2>
          <p style="font-size: 16px; margin-bottom: 10px;">Dear ${formData.name},</p>
          <p style="font-size: 16px; margin-bottom: 10px;">
            Thank you for reaching out to WhitehatSEO. We have received your message and will get back to you as soon as possible.
          </p>
          <p style="font-size: 16px; margin-bottom: 0;">
            Best regards,<br>
            <span style="color: #0d96de;">The WhitehatSEO Team</span>
          </p>
        </div>
      </body>
    </html>
    `

    // text: `Dear ${formData.name},

    // Thank you for reaching out to Whitehatseo. We have received your message and will get back to you as soon as possible.
    
    // Best regards,
    // The Whitehatseo Team`

  };


  // Send the notification email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });

    // Send the thank-you email to the user
    transporter.sendMail(thankYouOptions, (error, info) => {
      if (error) {
        console.error('Error sending thank-you email:', error);
      } else {
        console.log('Thank-you email sent successfully:', info.response);
      }
    });

};

module.exports = sendEmail;
