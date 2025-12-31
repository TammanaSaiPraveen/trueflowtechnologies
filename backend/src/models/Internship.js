import mongoose from 'mongoose';

const internshipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone number cannot be more than 20 characters']
  },
  coverLetter: {
    type: String,
    required: [true, 'Cover letter is required'],
    trim: true,
    maxlength: [3000, 'Cover letter cannot be more than 3000 characters']
  },
  resumeLink: {
    type: String,
    required: [true, 'Resume link is required'],
    trim: true,
    validate: {
      validator: function(v) {
        // Validate URL format
        return /^https?:\/\/.+/.test(v);
      },
      message: 'Please provide a valid URL for the resume link'
    },
    maxlength: [500, 'Resume link cannot be more than 500 characters']
  },
  jobTitle: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true,
    maxlength: [200, 'Job title cannot be more than 200 characters']
  },
  jobId: {
    type: String,
    required: [true, 'Job ID is required'],
    trim: true
  },
  jobType: {
    type: String,
    required: [true, 'Job type is required'],
    enum: ['Internship', 'Full-time', 'Part-time', 'Contract'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true,
    maxlength: [100, 'Location cannot be more than 100 characters']
  }
}, {
  timestamps: true
});

export default mongoose.model('Internship', internshipSchema);

