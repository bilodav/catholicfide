const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.get('/api', (req, res) => {
    res.json({ message: 'Store API is running 🚀' });
});

// Serve Vite build
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/{*path}', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});