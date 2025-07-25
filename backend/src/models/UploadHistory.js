const mongoose = require('mongoose');

const uploadHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File',
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    },
    analysisResults: {
        type: Object,
        required: false
    }
});

const UploadHistory = mongoose.model('UploadHistory', uploadHistorySchema);

module.exports = UploadHistory;