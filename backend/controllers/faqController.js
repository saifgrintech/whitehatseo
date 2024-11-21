// controllers/faqController.js
const Faq = require('../models/Faq');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../frontend/public/faqs/'); // Destination folder for uploaded images
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + file.originalname;
        cb(null, uniqueSuffix); // Unique filename for each uploaded file
    }
});

const upload = multer({ storage: storage });

// Controller functions

// Create new FAQ entry
const createFaq = async (req, res) => {
    try {
        const { heading, description, category } = req.body;
        const image = req.file ? req.file.filename : null; // Handle optional image

        const faq = new Faq({
            heading,
            description,
            image,
            category
        });

        const createdFaq = await faq.save();
        res.status(201).json(createdFaq);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all FAQ entries
const getAllFaqs = async (req, res) => {
    try {
        const faqs = await Faq.find();
        res.json(faqs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get FAQ entry by ID
const getFaqById = async (req, res) => {
    try {
        const faq = await Faq.findById(req.params.id);
        if (!faq) {
            return res.status(404).json({ message: 'FAQ not found' });
        }
        res.json(faq);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an existing FAQ entry
const updateFaq = async (req, res) => {
    try {
        const { id } = req.params;
        const { heading, description, category } = req.body;

        // Generate a new slug based on the updated heading
        const newSlug = slugify(heading, { lower: true, strict: true });

        let updateFields = { heading, description, category, slug: newSlug };

        const faq = await Faq.findById(id);
        if (!faq) {
            return res.status(404).json({ message: 'FAQ not found' });
        }

        if (req.file) {
            // Delete the old image if a new one is uploaded
            if (faq.image) {
                const oldImagePath = path.join(__dirname, '..', '..', 'frontend', 'public', 'faqs', faq.image);
                fs.unlink(oldImagePath, (err) => {
                    if (err) console.error('Failed to delete old image:', err);
                });
            }
            updateFields.image = req.file.filename; // Update with new image filename
            
        } else if (req.body.image === 'null' || req.body.image === null) {
            // If the image is set to null, delete the old image
            if (faq.image) {
                const oldImagePath = path.join(__dirname, '..', '..', 'frontend', 'public', 'faqs', faq.image);
                fs.unlink(oldImagePath, (err) => {
                    if (err) console.error('Failed to delete old image:', err);
                });
            }
            
            updateFields.image = null; // Set image to null
        }

        const updatedFaq = await Faq.findByIdAndUpdate(id, updateFields, { new: true });
        res.json(updatedFaq);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an FAQ entry
const deleteFaq = async (req, res) => {
    try {
        const faq = await Faq.findById(req.params.id);
        if (!faq) {
            return res.status(404).json({ message: 'FAQ not found' });
        }

        // Delete associated image if exists
        if (faq.image) {
            const imagePath = path.join(__dirname, '..', '..', 'frontend', 'public', 'faqs', faq.image);
            fs.unlink(imagePath, (err) => {
                if (err) console.error('Failed to delete image:', err);
            });
        }

        await Faq.findByIdAndDelete(req.params.id);
        res.json({ message: 'FAQ deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createFaq,
    getAllFaqs,
    getFaqById,
    updateFaq,
    deleteFaq,
    upload // Exporting multer upload for route handling
};
