const mongoose = require("mongoose");

const aboutUsSchema = new mongoose.Schema({
    title: {
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
      mission: {
        type: String,
        
      },
      vision: {
          type: String,
        
      },
      values: {
          type: String, 
        
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['draft', 'published', 'archived'], 
        default: 'draft',
    },
})

// We will create a new Collection

const AboutUs = new mongoose.model('AboutUs', aboutUsSchema);

module.exports = AboutUs;