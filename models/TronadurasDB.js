import mongoose from 'mongoose'

const TronaduraSchema = mongoose.Schema({
    Nombre:{
        type:String,
        Required:true,
    },
    fecha:{
        type:Date, 
        required:true,
        default:Date.now()
    },
    Fecha_programada:{
        type:Date, 
        required:true
    },
    tabla_columna:{
        type:Array,
        required:true
    },
    tabla_contenido:{
        type:Array,
        required:true
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

const Tronaduras= mongoose.model('Tronadura',TronaduraSchema)

export default Tronaduras