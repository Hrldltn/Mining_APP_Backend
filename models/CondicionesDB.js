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
    galla:{
        type:String,
        Required:true,
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

const Condicion = mongoose.model('Condiciones',condicionesSchemas)

export default Condicion

