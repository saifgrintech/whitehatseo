// routes/faqRoutes.js

const express = require('express');
const router = express.Router();
const { createFaq, getAllFaqs, getFaqById, updateFaq, deleteFaq, upload } = require('../controllers/faqController');

// Create a new FAQ entry
router.post('/backend/faqs', upload.single('image'), createFaq);

// Get all FAQ entries
router.get('/backend/faqs', getAllFaqs);

// Get an FAQ entry by ID
router.get('/backend/faqs/:id', getFaqById);

// Update an existing FAQ entry
router.put('/backend/faqs/:id', upload.single('image'), updateFaq);

// Delete an FAQ entry
router.delete('/backend/faqs/:id', deleteFaq);

module.exports = router;
