const express = require('express');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/success', (req, res) => {
    res.json({
        success: true,
        message: "Request successful!"
    });
});

app.get('/error', (req, res, next) => {
    const err = new Error("This is a forced error!");
    err.status = 500;
    next(err);
});

app.get('/user', (req, res, next) => {
    const name = req.query.name;

    if (!name) {
        const err = new Error("Name is required!");
        err.status = 400;
        return next(err);
    }

    res.json({
        success: true,
        message: `Hello, ${name}`
    });
});

app.use((req, res, next) => {
    const err = new Error("Route not found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});