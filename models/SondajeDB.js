import mongoose from ' mongoose '

const SondajeSchema=mongoose.Schema({
    fases:{
        type:String,
        required:true
    }, 
    metros:{
        type:String,
        required:true
    },
    usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Usuario'
    }
})

const Sondaje = mongoose.model('Sondaje',SondajeSchema)

export default Sondaje