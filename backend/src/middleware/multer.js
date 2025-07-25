const multer = require('multer');
const path = require('path');

// Set up storage engine for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the destination folder for uploads
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Create a unique filename
  }
});

// Initialize upload variable with multer configuration
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /xlsx|xls|csv/; // Allowed file types
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: File type not supported!'); // Error for unsupported file types
    }
  }
});

// Export the upload middleware
module.exports = upload;