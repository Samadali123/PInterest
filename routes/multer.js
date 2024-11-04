// const multer = require(`multer`);
// const { v4: uuidV4 } = require(`uuid`);
// const path = require(`path`);


// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, `./public/images/uploads`);
//     },
//     filename: function(req, file, cb) {
//         const filename = uuidV4();
//         cb(null, filename + path.extname(file.originalname));
//     }
// })



// function filefilter(req, file, cb) {
//     const text = path.extname(file.originalname);
//     if (text === ".png" || text === ".jpg" || text === ".svg") {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }



// const upload = multer({ storage: storage }, filefilter);
// module.exports = upload;



// multer.js
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary'); // Import the cloudinary config

// Set up Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'public/images/uploads', // Folder on Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png', 'avif', 'webp'], // Allowed file types
    public_id: (req, file) => `${Date.now()}-${file.originalname}`, // Unique file name
  },
});

// Initialize Multer with Cloudinary storage and file size limit
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Max size: 5MB
});

module.exports = upload;