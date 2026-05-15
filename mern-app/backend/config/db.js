// Import mongoose
const mongoose = require('mongoose');

// Function for connecting to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB database
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB Connected Successfully');
  } catch (error) {
    // Display error if connection fails
    console.error('MongoDB Connection Error:', error.message);

    // Stop server if database fails
    process.exit(1);
  }
};

module.exports = connectDB;