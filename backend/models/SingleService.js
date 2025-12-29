const mongoose = require("mongoose");
const slugify = require("slugify");

const serviceSchema = new mongoose.Schema(
  {
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: { 
    type: [String], 

  },
  slug: {
    type: String,
    unique: true,
  },
  features: [
    {
        featureIcon: String,
        featureTitle: String,
        featureDesc: String,
    }
],
  //  FAQ Section
   faqs: [
  {
    faqTitle: {
      type: String,
      default: "",
      trim: true,
    },
    faqDesc: {
      type: String,
      default: "",
      trim: true,
    },
  },
],


  status: {
    type: String,
    enum: ['draft', 'published', 'archived'], 
    default: 'draft',
  },
  
},
{ new: true } // Ensures the updated document is returned
);

// Middleware to generate slug before saving the document
serviceSchema.pre('save', function (next) {
  if (this.isModified('heading')) { 
    this.slug = slugify(this.heading, { lower: true, strict: true });
  }
  this.updatedAt = Date.now(); // Update the updatedAt field
  next();
});

// Create a new Collection
const SingleService = new mongoose.model('SingleService', serviceSchema);

module.exports = SingleService;
