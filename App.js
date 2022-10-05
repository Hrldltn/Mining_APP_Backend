import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import conectarDB from './config/db.js'
import UsuarioRoutes from './routes/usuarioRoutes.js'
import condicionRoutes from './routes/condicionRoutes.js'

const app = express()
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
 
// // Set EJS as templating engine
// app.set("view engine", "ejs");

dotenv.config()

conectarDB()

const dominiosAuthorization = [process.env.FRONTEND_URL]

const corsOptions ={
    origin:function(origin,callback){
        if(dominiosAuthorization.indexOf(origin) !== -1){
            callback(null,true)
        }else{
            callback(new Error('No permitido por CORS policy!!'))
        }
    }
}
app.use(cors(corsOptions))
app.use('/api/usuario',UsuarioRoutes)
app.use('/api/condicion',condicionRoutes)


const PORT=process.env.PORT || 4000

app.listen(PORT,() =>{
    console.log(`servidor funcionando en el puerto ${PORT}`)

})