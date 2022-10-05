import Usuario from '../models/UsuarioDB.js'
import generarJWT from '../helpers/generarJWT.js'
import generarId from '../helpers/generarId.js'
import emailRegistro from '../helpers/emailRegistro.js'
import emailOlvidePass from '../helpers/emailOlvidePass.js'

const registrar = async (req,res)=>{
    const {correo,area} = req.body

    //revisar usuarios duplicados
    const existeUsuario = await Usuario.findOne({correo})

    if(existeUsuario){
        const error = new Error('Usuario  registrado');
        return res.status(400).json({msg:error.message});
    }


    try {
        //guardar usuario
        const usuario = new Usuario(req.body)
        const usuarioGuardado = await usuario.save()
        //envio email de confirmacion
        emailRegistro({correo,area,token:usuarioGuardado.token, nombre:usuarioGuardado.nombre , apellido:usuarioGuardado.apellido})

        res.json(usuarioGuardado)
    } catch (error) {
        console.log(error)
    }
}

const confirmar= async (req,res)=>{

    const { token }= req.params
    const usuarioConfirmar=await Usuario.findOne({token})

    if(!usuarioConfirmar){
        const error=new Error('¡ Usuario ya confirmado o no existe !')
        return res.status(404).json({msg:error.message});
    }

    try{
        usuarioConfirmar.token=null
        usuarioConfirmar.confirmado=true
        await usuarioConfirmar.save()
        res.json({msg:'¡ Usuario confirmado correctamente !'})

    }catch(error){
        console.log(error)
    }
}

const autenticar=async (req,res)=>{
    const {correo , contraseña} = req.body    

    //comprobacion de usuario existente
    const usuario = await Usuario.findOne({correo})

    if(!usuario){
        const error = new Error('¡ El Usuario no existe !')
        return res.status(404).json({msg:error.message})
    }
    //comprobar que este confirmado
    if(!usuario.confirmado){
        const error = new Error('¡ Tu cuenta no ha sido confirmada !')
        return res.status(403).json({msg:error.message})
    }

    //Revisar contraseña 
    if(await usuario.comprobarContraseña(contraseña)){
        //autenticar usuario despues de comprobar la contraseña
        res.json({_id:usuario._id,correo:usuario.correo,token:generarJWT(usuario.id)})
    }else{
        const error = new Error('¡ La contraseña es incorrecta !')
        return res.status(403).json({msg:error.message})
    }   
}

const perfil= (req,res)=>{
    const {usuario} = req
    res.json(usuario)
}

const olvidePassword= async (req,res)=>{
    const {correo} = req.body
    
    // ver si usuario existe
    const existeUsuario = await Usuario.findOne({correo})

    if(!existeUsuario){
        const error = new Error ('El usuario no existe')
        return res.status(400).json({msg:error.message})
    }

    try {
        existeUsuario.token= generarId()
        await existeUsuario.save()
        //enviar email con instrucciones
        emailOlvidePass({correo,area:existeUsuario.area,token:existeUsuario.token, nombre:existeUsuario.nombre , apellido:existeUsuario.apellido})

        res.json({msg:'¡ Enviamos un email con las instrucciones !'})
    } catch (error) {
        console.log(error)
    }
}

const comprobarToken= async (req,res)=>{
    const { token } = req.params

    const tokenValido = await Usuario.findOne({token})

    //ver si existe
    if(tokenValido){
        //ver si el token es valido
        res.json({msg:'¡ Token valido el usuario existe !'})
    }else{
        const error = new Error('token no valido!')
        return res.status(400).json({msg:error.message})
    }
}

const nuevoPassword= async (req,res)=>{
    const {token} = req.params
    const {contraseña} = req.body

    const usuario = await Usuario.findOne({token})

    if (!usuario){
        const error = new Error ("¡ Hubo un error invalid token !")
        return res.status(400).json({msg:error.message})
    }

    try {
        usuario.token=null
        usuario.contraseña=contraseña
        await usuario.save()
        res.json({msg:'¡ Password modificado correctamente !'})
    } catch (error) {
        console.log(error)
    }
}

export {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword
}