const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  RemedyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Remedy',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
 
  comment: {
    type: String,
    trim: true,
    maxlength: 1000 // Limiting the length of the review text
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware to update the `updatedAt` field whenever the document is updated
reviewSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Add an index on product and user to ensure that each user can only leave one review per product
reviewSchema.index({ product: 1, user: 1 }, { unique: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
