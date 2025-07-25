const express = require('express');
const { uploadFile, getUploadHistory } = require('../controllers/fileController');
const { authenticate } = require('../middleware/auth');
const multer = require('../middleware/multer');

const router = express.Router();

// Route for uploading files
router.post('/upload', authenticate, multer.single('file'), uploadFile);

// Route for getting upload history
router.get('/history', authenticate, getUploadHistory);

module.exports = router;