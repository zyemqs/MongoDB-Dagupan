const express = require('express');
const app = express();

const registerValidation = require('./middleware/validateRegister');

// Middleware
app.use(express.json());

// Step 2.2: Demo API Route
app.post('/register', registerValidation, (req, res) => {
    return res.status(200).json({
        success: true,
        message: "User registered successfully",
        data: req.body
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(Server running on http://localhost:);
});
