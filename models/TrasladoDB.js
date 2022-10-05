import mongoose from 'mongoose' //

const TrasladoSchema = mongoose.Schema({
    modelo:{
        type:String,
        required:true,
    },
    fase:{
        type:String,
        required:true,
    },
    usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Usuario'
    }
})

const Traslado = mongoose.model('Traslado',TrasladoSchema)

export default Traslado