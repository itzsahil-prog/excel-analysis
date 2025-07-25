const File = require('../models/File');
const UploadHistory = require('../models/UploadHistory');
const multer = require('multer');
const excelParser = require('../utils/excelParser');

// Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload file and parse it
exports.uploadFile = async (req, res) => {
    upload.single('file')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: 'File upload failed', error: err });
        }

        try {
            const fileData = await excelParser.parseExcel(req.file.buffer);
            const newFile = new File({
                filename: req.file.originalname,
                data: fileData,
                userId: req.user.id,
            });

            await newFile.save();

            const uploadHistory = new UploadHistory({
                userId: req.user.id,
                fileId: newFile._id,
                uploadDate: new Date(),
            });

            await uploadHistory.save();

            res.status(200).json({ message: 'File uploaded successfully', file: newFile });
        } catch (error) {
            res.status(500).json({ message: 'Error processing file', error: error });
        }
    });
};

// Get upload history for a user
exports.getUploadHistory = async (req, res) => {
    try {
        const history = await UploadHistory.find({ userId: req.user.id }).populate('fileId');
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching upload history', error: error });
    }
};