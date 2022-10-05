import mongoose from 'mongoose'

const TronaduraSchema = mongoose.Schema({
    fecha:{
        type:Date,
        required:true,
        default:Date.now()
    },
    fases:{
        type:String,
        required:true,
    },
    fasesTronadas:{
        type:String,
        required:true,
    },
    cantidadFuegos:{
        type:String,
        required:true,
    },
    CondicionMeteo:{
        type:String,
        required:true,
    },
    suspensionDetalle:{
        type:String,
        default:null,
    },
    fechaRepro:{
        type:Date,
        required:false,
        default:Date.now()
    },
    fechaInforme:{
        type:Date,
        required:false,
        default:Date.now()
    },
    fasesSusp:{
        type:String,
        default:null,
    },
    horaEjecu:{
        type:String,
        default:null,
    },
    horaSusp:{
        type:String,
        default:null,
    },
    razonSusp:{
        type:String,
        default:null,
    },
    comentarios:{
        type:String,
        default:null,
    },
    usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Usuario'
    }
},
{
    timestamps:true,
}
)

const Tronaduras= mongoose.model('Tronadura',TronaduraSchema)

export default Tronaduras