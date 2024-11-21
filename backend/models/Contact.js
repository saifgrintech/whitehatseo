const mongoose = require('mongoose');
const moment = require('moment-timezone');

// Contact Schema
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Format createdAt and updatedAt in Indian time zone (IST) when converting to JSON
// Used (npm install moment-timezone) to convert time.

contactSchema.set('toJSON', {
  transform: (doc, ret) => {
    // Format dates in 'DD-MM-YYYY HH:mm:ss' and convert to IST (Indian Standard Time)
    ret.createdAt = moment(ret.createdAt).tz('Asia/Kolkata').format('DD-MM-YYYY HH:mm:ss');
    ret.updatedAt = moment(ret.updatedAt).tz('Asia/Kolkata').format('DD-MM-YYYY HH:mm:ss');
    return ret;
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
