const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/auth');

// Route to get all users
router.get('/users', authMiddleware.verifyAdmin, adminController.getAllUsers);

// Route to get usage statistics
router.get('/statistics', authMiddleware.verifyAdmin, adminController.getUsageStatistics);

// Route to delete a user
router.delete('/users/:id', authMiddleware.verifyAdmin, adminController.deleteUser);

// Route to update user roles
router.put('/users/:id/role', authMiddleware.verifyAdmin, adminController.updateUserRole);

module.exports = router;