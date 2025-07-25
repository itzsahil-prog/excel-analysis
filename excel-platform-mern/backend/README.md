# Excel Platform MERN

## Overview
This project is a complete platform built using the MERN stack (MongoDB, Express, React, Node.js) for uploading and analyzing Excel files. It includes features such as secure user authentication, file uploads, data parsing, interactive chart generation, and an admin dashboard for user management.

## Features
- **Secure Login**: User authentication using JWT for secure sessions.
- **File Upload**: Upload Excel files with validation and storage using Multer.
- **Data Parsing**: Parse uploaded Excel files using SheetJS for data extraction.
- **Column Selection**: Users can select specific columns for visualization.
- **Interactive Charts**: Generate charts using Chart.js and Three.js based on selected data.
- **Chart Download**: Options to download generated charts in PNG or PDF formats.
- **Upload History**: Maintain a history of user uploads and analyses.
- **Admin Dashboard**: Manage users and view usage statistics from a centralized dashboard.

## Project Structure
```
excel-platform-mern
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   │   ├── fileController.js
│   │   │   ├── chartController.js
│   │   │   └── adminController.js
│   │   ├── middleware
│   │   │   ├── auth.js
│   │   │   └── multer.js
│   │   ├── models
│   │   │   ├── User.js
│   │   │   ├── File.js
│   │   │   └── UploadHistory.js
│   │   ├── routes
│   │   │   ├── authRoutes.js
│   │   │   ├── fileRoutes.js
│   │   │   ├── chartRoutes.js
│   │   │   └── adminRoutes.js
│   │   └── utils
│   │       └── excelParser.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── Auth
│   │   │   │   ├── Login.js
│   │   │   │   └── Register.js
│   │   │   ├── FileUpload.js
│   │   │   ├── ColumnSelector.js
│   │   │   ├── ChartGenerator.js
│   │   │   ├── ChartDownload.js
│   │   │   ├── UploadHistory.js
│   │   │   └── AdminDashboard.js
│   │   ├── pages
│   │   │   ├── Home.js
│   │   │   ├── Dashboard.js
│   │   │   └── Admin.js
│   │   ├── utils
│   │   │   ├── jwt.js
│   │   │   └── api.js
│   │   ├── assets
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd excel-platform-mern
   ```

2. **Backend Setup**:
   - Navigate to the `backend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Start the backend server:
     ```
     npm start
     ```

3. **Frontend Setup**:
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Start the frontend application:
     ```
     npm start
     ```

## Technologies Used
- **Backend**: Node.js, Express, MongoDB, JWT, Multer, SheetJS
- **Frontend**: React, Chart.js, Three.js

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.