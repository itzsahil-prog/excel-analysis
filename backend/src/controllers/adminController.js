const User = require('../models/User');
const UploadHistory = require('../models/UploadHistory');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user', error });
    }
};

// Delete user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};

// Get upload statistics
exports.getUploadStatistics = async (req, res) => {
    try {
        const uploadHistory = await UploadHistory.aggregate([
            {
                $group: {
                    _id: '$userId',
                    totalUploads: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(uploadHistory);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving upload statistics', error });
    }
};