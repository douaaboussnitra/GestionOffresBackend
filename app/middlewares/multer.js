import multer from 'multer';
import path from 'path';

// Set up storage
const storage = multer.diskStorage({ // config

  destination: function (req, file, multer) {  // fin bghit nhot  les file 
    multer(null, 'uploads/');
  },
  filename: function (req, file, multer) {
    multer(null, Date.now() + path.extname(file.originalname));  // kifach ghadi tkon smiya dyal file 
  }
});

// Initialize multer
const upload = multer({ storage: storage });

export default upload;