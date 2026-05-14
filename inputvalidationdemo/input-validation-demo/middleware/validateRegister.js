// Step 3 + 4: Input Validation Middleware

module.exports = (req, res, next) => {
    const { name, email, password } = req.body;

    let errors = [];

    // Step 3.1: Required Fields
    if (!name) errors.push("Name is required");
    if (!email) errors.push("Email is required");
    if (!password) errors.push("Password is required");

    // Step 3.2: Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        errors.push("Invalid email format");
    }

    // Step 3.3: Password Length Validation
    if (password && password.length < 6) {
        errors.push("Password must be at least 6 characters long");
    }

    // Step 4.2: Structured Error Response
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Invalid input data",
            errors: errors
        });
    }

    next();
};
