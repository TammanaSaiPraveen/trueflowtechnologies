import express from 'express';
import { body } from 'express-validator';
import { submitContact } from '../controllers/contactController.js';

const router = express.Router();

// Validation rules for contact submission
const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters')
];

// Public route - submit contact form (no authentication required)
router.post('/', contactValidation, (req, res, next) => {
  console.log('📨 POST /api/contact - Request received');
  next();
}, submitContact);

export default router;

