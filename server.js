const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// File upload setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Endpoint to handle Excel file upload
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    // Here you can process the Excel file
    return res.send('File uploaded successfully.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
