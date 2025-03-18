require('dotenv').config(); // Load .env file

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use .env port or default to 3000
const path = require('path');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get("/find", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'find.html'));
});
app.get("/upload", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'upload.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

