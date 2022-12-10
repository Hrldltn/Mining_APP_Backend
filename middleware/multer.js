import multer from 'multer'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)
const storage = multer.diskStorage({
    // Destination to store image     
   destination: function(req,file,cb){
    cb(null,path.join(__dirname,'./public/storages'))
   },
   filename:function(req,file,cb){
    cb(null,`${file.filename}-${Date.now()}.${file.mimetype.split('/')[1]}`)
   }
});
    const MaxFileSize= 50 * 1024 * 1024
    const upload = multer({ storage: storage , limits:{fileSize: MaxFileSize }, dest:(__dirname , '/public/storages')}).single('file')


export default upload