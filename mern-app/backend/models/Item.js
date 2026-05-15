const mongoose = require('mongoose');

// Create schema for items
const itemSchema = new mongoose.Schema(
  {
    // Item name
    name: {
      type: String,
      required: true,
      trim: true
    },

    // Item description
    description: {
      type: String,
      default: 'No description provided'
    }
  },
  {
    // Automatically adds createdAt and updatedAt
    timestamps: true
  }
);

// Export model
module.exports = mongoose.model('Item', itemSchema);