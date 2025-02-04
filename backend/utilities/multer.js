import multer from "multer";
// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const multerFilter = (req, file, cb)=> {
    if(file.mimetype.startsWith('image')){
        cb(null,true)
    }
    else{
        cb(newAppError('Not an image!please upload only images',400),false)
    }
}
// Multiple image upload configuration
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        cb(null, true);
    }
});
// Single image upload configuration
const uploadSingleImage = multer({
    storage: storage,
    fileFilter:multerFilter
});
export { uploadSingleImage };
export default upload;