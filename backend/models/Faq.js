const mongoose = require("mongoose");
const slugify = require("slugify");

const faqSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
    // required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  category: {
    type: String,
    enum: ['Search Engine Optimization', 'Social Media Marketing', 'Digital Marketing'], 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to generate slug before saving the document
faqSchema.pre('save', function (next) {
  if (this.isModified('heading')) {
    this.slug = slugify(this.heading, { lower: true, strict: true });
  }
  this.updatedAt = Date.now(); // Update the updatedAt field
  next();
});

// Create a new Collection
const Faq = mongoose.model('Faq', faqSchema);

module.exports = Faq;


