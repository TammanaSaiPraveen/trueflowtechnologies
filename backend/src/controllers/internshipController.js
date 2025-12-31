import Internship from '../models/Internship.js';
import { validationResult } from 'express-validator';

// @desc    Submit internship application
// @route   POST /api/internship
// @access  Public
export const submitInternship = async (req, res) => {
  try {
    console.log('📥 Job application submission received:', req.body);
    
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('❌ Validation errors:', errors.array());
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    const { name, email, phone, coverLetter, resumeLink, jobTitle, jobId, jobType, location } = req.body;
    console.log('✅ Validation passed. Creating application entry...');

    // Create internship application
    const internship = await Internship.create({
      name,
      email,
      phone,
      coverLetter,
      resumeLink,
      jobTitle,
      jobId,
      jobType,
      location
    });

    console.log('✅ Application saved to database:', internship._id);

    res.status(201).json({
      success: true,
      message: 'Thank you for your application! We will review it and get back to you soon.',
      data: {
        id: internship._id,
        name: internship.name,
        email: internship.email,
        jobTitle: internship.jobTitle,
        submittedAt: internship.createdAt
      }
    });
  } catch (error) {
    console.error('❌ Submit internship error:', error);
    console.error('Error details:', error.message);
    console.error('Error stack:', error.stack);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Get all internship applications
// @route   GET /api/internship
// @access  Public (for viewing applications - can be protected later if needed)
export const getInternships = async (req, res) => {
  try {
    const internships = await Internship.find({})
      .sort({ createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: internships.length,
      data: internships
    });
  } catch (error) {
    console.error('Get internships error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get single internship application
// @route   GET /api/internship/:id
// @access  Public (can be protected later if needed)
export const getInternship = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: 'Internship application not found'
      });
    }

    res.status(200).json({
      success: true,
      data: internship
    });
  } catch (error) {
    console.error('Get internship error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update internship application
// @route   PUT /api/internship/:id
// @access  Public (can be protected later if needed)
export const updateInternship = async (req, res) => {
  try {
    const { name, email, phone, coverLetter, resumeLink, jobTitle, jobId, jobType, location } = req.body;

    const internship = await Internship.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, coverLetter, resumeLink, jobTitle, jobId, jobType, location },
      { new: true, runValidators: true }
    );

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: 'Internship application not found'
      });
    }

    res.status(200).json({
      success: true,
      data: internship
    });
  } catch (error) {
    console.error('Update internship error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete internship application
// @route   DELETE /api/internship/:id
// @access  Public (can be protected later if needed)
export const deleteInternship = async (req, res) => {
  try {
    const internship = await Internship.findByIdAndDelete(req.params.id);

    if (!internship) {
      return res.status(404).json({
        success: false,
        message: 'Internship application not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Internship application deleted successfully'
    });
  } catch (error) {
    console.error('Delete internship error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

