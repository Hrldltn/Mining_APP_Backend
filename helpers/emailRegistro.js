import nodemailer from 'nodemailer'

const emailRegistro = async (datos) =>{
    var transporter = nodemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port:process.env.EMAIL_PORT ,
        auth: {
          user:process.env.EMAIL_USER,
          pass:process.env.EMAIL_PASS
        }
    });
    const{correo , area , nombre , apellido , token} = datos

    //enviar email 

    const info = await transporter.sendMail({
        from: "Global Copper Mining",
        to:`${correo}`,
        subject:'Comprueba tu cuenta de MINING',
        text:'Comprueba tu cuenta',
        html:`<p>Hola: ${nombre} ${apellido} Bienvenido al area de ${area} </p> 
        <p>Para terminar su registro solo debes ingresar al siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a></p>
        <p>Si esta no es tu Área O Cuenta Por favor Contactar a Jefatura</p> `  
    })
    console.log("mensaje enviado : %s",info.messageId)
}

export default emailRegistro