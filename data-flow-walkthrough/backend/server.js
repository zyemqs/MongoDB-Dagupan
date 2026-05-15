const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Student = require('./models/Student');

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect('mongodb://127.0.0.1:27017/studentdb')
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.post('/students', async (req, res) => {
  try {
    const student = new Student({
      name: req.body.name,
      course: req.body.course
    });

    await student.save();

    res.json({
      success: true,
      message: 'Student added successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();

    res.json(students);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});