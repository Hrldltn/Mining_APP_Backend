import mongoose from "mongoose";

const condicionesSchemas = mongoose.Schema({
    nombre:{
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
},
{
    timestamps:true,
}
)

const Condicion = mongoose.model('Condiciones',condicionesSchemas)

export default Condicion

