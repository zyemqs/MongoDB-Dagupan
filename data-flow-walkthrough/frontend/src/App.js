import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/students'
      );

      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'http://localhost:8000/students',
        {
          name,
          course
        }
      );

      alert('Student added successfully');

      setName('');
      setCourse('');

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Student Management</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />

        <button type="submit">
          Add Student
        </button>
      </form>

      <h2>Student List</h2>

      {students.map((student) => (
        <div
          key={student._id}
          className="student-card"
        >
          <p>
            <strong>Name:</strong> {student.name}
          </p>

          <p>
            <strong>Course:</strong> {student.course}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;