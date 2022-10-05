import nodemailer from 'nodemailer'

const emailOlvidePass = async (datos) =>{
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
        subject:'Reestablece tu password de MINING',
        text:'Reestablece tu password de MINING',
        html:`<p>Hola: ${nombre} ${apellido} del area de ${area} </p> 
        <p>, has solicitado reestablecer tu contraseña sigue el siguiente enlace para generar una nueva contraseña:
        <a href="${process.env.FRONTEND_URL}/recuperar-password/${token}">Reestablecer Contraseña</a></p>
        <p>Si esta no es tu Área O Cuenta Por favor Contactar a Jefatura</p> `  
    })
    console.log("mensaje enviado : %s",info.messageId)
}

export default emailOlvidePass