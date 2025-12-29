const Service = require('../models/SingleService');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '..', '..', 'frontend', 'public', 'singleserviceimg'));
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  }
});

const upload = multer({ storage: storage });

// Create a new service item
const createService = async (req, res) => {
  try {
    const { heading, description, features , faqs} = req.body;
    const images = req.files ? req.files.map(file => file.filename) : [];

    // Parse the features array if it comes as a string
    const parsedFeatures = typeof features === 'string' ? JSON.parse(features) : features;

    // console.log(parsedFeatures);

     //  Parse FAQs
    let parsedFaqs = [];

    if (req.body.faqs) {
      parsedFaqs =
        typeof req.body.faqs === "string"
          ? JSON.parse(req.body.faqs)
          : req.body.faqs;
    }



    // Generate slug from heading
    const slug = slugify(heading, { lower: true, strict: true });

    // Check if the slug already exists in the database
    const existingService = await Service.findOne({ slug });
    if (existingService) {
      return res.status(400).json({ message: 'Slug already exists, please choose a different heading.' });
    }

    const serviceItem = new Service({
      heading,
      description,
      images,
      features: parsedFeatures, // Include features with featureIcon
      faqs: parsedFaqs,
      slug,
    });

    const createdService = await serviceItem.save();
    res.status(201).json(createdService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Get all single services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single service by ID
const getServiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single service by slug
const getServiceBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const service = await Service.findOne({ slug }); // Assuming `slug` is a field in your Service model
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update service by ID
const updateServiceById = async (req, res) => {
  const { id } = req.params;
  const { heading, description, features, faqs, removedImages } = req.body;

  try {
    const serviceDetails = await Service.findById(id);
    if (!serviceDetails) {
      return res.status(404).json({ message: 'Service not found' });
    }

    // Handle images
    let oldImages = serviceDetails.images || [];
    const removedImagesArray = removedImages ? JSON.parse(removedImages) : [];
    removedImagesArray.forEach((image) => {
      const imagePath = path.join(__dirname, '..', '..', 'frontend', 'public', 'singleserviceimg', image);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(`Error deleting image ${image}:`, err);
        }
      });
    });
    oldImages = oldImages.filter((image) => !removedImagesArray.includes(image));
    const newImages = req.files ? req.files.map((file) => file.filename) : [];
    const updatedImages = [...oldImages, ...newImages];

     // Parse the features array if it comes as a string
     const updatedFeatures = typeof features === 'string' ? JSON.parse(features) : features || serviceDetails.features;

     let updatedFaqs = serviceDetails.faqs || [];

      if (req.body.faqs) {
        updatedFaqs =
          typeof req.body.faqs === "string"
            ? JSON.parse(req.body.faqs)
            : req.body.faqs;
      }




    // Generate a new slug based on the updated heading
    const newSlug = slugify(heading, { lower: true, strict: true });

    // Check if the new slug already exists for a different service
    const existingServiceWithSlug = await Service.findOne({ slug: newSlug });
    if (existingServiceWithSlug && existingServiceWithSlug._id.toString() !== id) {
      return res.status(400).json({ message: 'Slug already exists, please choose a different heading.' });
    }

    // Update the Service
    const updatedService = await Service.findByIdAndUpdate(
      id,
      {
        heading,
        description,
        images: updatedImages,
        features: updatedFeatures,
        faqs: updatedFaqs,
        slug: newSlug,
      },
      { new: true }
    );

    res.json(updatedService);
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(400).json({ message: error.message });
  }
};


// Delete service by ID
const deleteServiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    // Delete images from the file system
    service.images.forEach(image => {
      const imagePath = path.join(__dirname, '..', '..', 'frontend', 'public', 'singleserviceimg', image);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error('Error deleting image:', err);
        }
      });
    });

    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  getServiceBySlug,
  updateServiceById,
  deleteServiceById,
  upload
};
