const express = require('express');
const { generateChart } = require('../controllers/chartController');
const router = express.Router();

// Route for generating charts
router.post('/generate', generateChart);

module.exports = router;