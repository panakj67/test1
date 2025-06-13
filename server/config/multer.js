import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, "uploads"); // store in "uploads" folder
    },
    filename: function (req, file, cb) {
     const uniqueName = Date.now() + "-" + file.originalname;
     cb(null, uniqueName);
    }
});

const upload = multer({ storage : storage})

export default upload;