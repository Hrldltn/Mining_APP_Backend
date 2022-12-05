import mongoose from "mongoose";

const condicionesSchemas = mongoose.Schema({
    Nombre:{
        type:String,
        Required:true,
    },
    modelo:{
        type:String,
        Required:true,
    },
    cantidad:{
        type:String,
        Required:true,
    },
    estado:{
        type:String,
        Required:true,
    },
    fecha:{
        type:Date, 
        required:true,
        default:Date.now()
    },
    observacion:{
        type:String,
        Required:true,
    },
    detallesMantencion:{
        type:Array,
        Required:false,
    },
    detallesMalEstado:{
        type:Array,
        Required:false,
    },
    imagen:{
        type:String,

    },
    usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Usuario'
    },
    user:{
        type:String,
        required:false,
        trim:true,
    },
},
{
    timestamps:true,
}
)
condicionesSchemas.methods.setImgUrl=function setImgUrl(filename){
    this.imagen=`${process.env.HOST}:${process.env.PORT}/public/${filename}`
}

const Condicion = mongoose.model('Condiciones',condicionesSchemas)



export default Condicion

