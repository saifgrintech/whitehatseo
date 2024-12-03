// controllers/contactController.js

const Contact = require('../models/Contact');
const sendEmail = require('../services/emailService'); // Import the sendEmail function
const axios = require('axios');


// Your reCAPTCHA secret key from environment variables
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

// Create a new contact
const createContact = async (req, res) => {
  try {
    // Destructure data from the request body
    const { firstName, lastName, phone, email, subject, message, captcha } = req.body;

    // If captcha is provided, verify it with Google reCAPTCHA
    if (captcha) {
      const recaptchaResponse = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify`,
        null,
        {
          params: {
            secret: RECAPTCHA_SECRET_KEY,
            response: captcha, // The reCAPTCHA response token sent from the frontend
          },
        }
      );

      // If reCAPTCHA validation fails, return an error
      if (!recaptchaResponse.data.success) {
        return res.status(400).json({ success: false, error: 'reCAPTCHA verification failed' });
      }
    }

    // Proceed with saving the contact regardless of reCAPTCHA
    const newContact = new Contact({ firstName, lastName, phone, email, subject, message });
    await newContact.save();

    // Construct the name dynamically
    const fullName = lastName ? `${firstName} ${lastName}` : firstName;
    
    // Send the email notification
    sendEmail({
      name: fullName,
      email,
      phone,
      subject,
      message
    });

    res.status(201).json({ success: true, data: newContact });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};


// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get a single contact by ID
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }
    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update a contact by ID
const updateContact = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, subject, message } = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, phone, email, subject, message },
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }

    res.status(200).json({ success: true, data: updatedContact });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete a contact by ID
const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }
    res.status(200).json({ success: true, data: deletedContact });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = { createContact, getAllContacts, getContactById, updateContact, deleteContact };
