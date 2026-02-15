const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint for Google Cloud
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});
//gdfhghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 To-Do App server running on port ${PORT}`);
    console.log(`📝 Visit http://localhost:${PORT} to view your app`);
});
