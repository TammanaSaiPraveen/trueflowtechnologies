import express from 'express';
import { body } from 'express-validator';
import {
  submitInternship,
  getInternships,
  getInternship,
  updateInternship,
  deleteInternship
} from '../controllers/internshipController.js';

const router = express.Router();

// Validation rules for internship application
const internshipValidation = [
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
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .isLength({ min: 10, max: 20 })
    .withMessage('Phone number must be between 10 and 20 characters'),
  body('coverLetter')
    .trim()
    .notEmpty()
    .withMessage('Cover letter is required')
    .isLength({ min: 50, max: 3000 })
    .withMessage('Cover letter must be between 50 and 3000 characters'),
  body('resumeLink')
    .trim()
    .notEmpty()
    .withMessage('Resume link is required')
    .isURL()
    .withMessage('Please provide a valid URL for the resume link')
    .isLength({ max: 500 })
    .withMessage('Resume link cannot be more than 500 characters'),
  body('jobTitle')
    .trim()
    .notEmpty()
    .withMessage('Job title is required')
    .isLength({ max: 200 })
    .withMessage('Job title cannot be more than 200 characters'),
  body('jobId')
    .trim()
    .notEmpty()
    .withMessage('Job ID is required'),
  body('jobType')
    .trim()
    .notEmpty()
    .withMessage('Job type is required')
    .isIn(['Internship', 'Full-time', 'Part-time', 'Contract'])
    .withMessage('Job type must be one of: Internship, Full-time, Part-time, Contract'),
  body('location')
    .trim()
    .notEmpty()
    .withMessage('Location is required')
    .isLength({ max: 100 })
    .withMessage('Location cannot be more than 100 characters')
];

// Public route - submit internship application (no authentication required)
router.post('/', internshipValidation, submitInternship);

// Public routes for viewing applications (can be protected later if needed)
router.get('/', getInternships);
router.get('/:id', getInternship);
router.put('/:id', updateInternship);
router.delete('/:id', deleteInternship);

export default router;

