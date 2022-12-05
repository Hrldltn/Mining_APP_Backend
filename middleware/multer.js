import multer from 'multer'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)
const storage = multer.diskStorage({
    // Destination to store image     
    destination:(__dirname , './public/storages'), 
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});
    const MaxFileSize= 50 * 1024 * 1024
    const upload = multer({ storage: storage , limits:{fileSize: MaxFileSize }, dest:(__dirname , './public/storage')}).single('file')


export default upload