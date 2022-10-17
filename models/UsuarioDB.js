import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import generarId from '../helpers/generarId.js'

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type:String,
        trim:true,
        required:true,


    },
    apellido:{
        type:String,
        trim:true,
        required:true,


    },
    contraseña:{
        type:String,
        required:true,
    },
    correo:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    telefono:{
        type:String,
        default:null,
        trim:true,
    },
    area:{
        type:String,
        default:null
    },
    foto:{
        data:Buffer,
        contentType:String
    },
    token:{
        type:String,
        default: generarId
    },
    confirmado:{
        type:Boolean,
        default:false                                                           
    }
})

UsuarioSchema.pre('save',async function (next){
    if(!this.isModified('contraseña')){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt)
})
UsuarioSchema.methods.comprobarContraseña=async function (contraseñaFormulario) {
    return await bcrypt.compare(contraseñaFormulario,this.contraseña)
}

const Usuario = mongoose.model('Usuario',UsuarioSchema)
export default Usuario

