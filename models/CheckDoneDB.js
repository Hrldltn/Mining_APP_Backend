import mongoose from "mongoose";

const MantencionSchema = mongoose.Schema({
    fecha:{
        type:Date, 
        required:true,
    },
    modelo:{
        type:String,
        Required:true,
    },
    user:{
        type:String,
        required:false,
        trim:true,
    },
    observacion:{
        type:String,
        Required:true,
    },
    estado:{
        type:String,
        Required:true,
    },
},
{
    timestamps:true,
}
)


const Mantencion = mongoose.model('Mantencion',MantencionSchema)



export default Mantencion