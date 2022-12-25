import CheckDone from '../models/CheckDoneDB.js'

const agregarMantencion = async (req,res) => {
  const mantencion = new CheckDone (req.body)
  try {
    const mantencionGuardada = await mantencion.save()
    res.json ( mantencionGuardada )
  } catch (error) {
    const e = new Error('token no valido!')
    return res.status(400).json({msg:e.message})
  }

  
}

const obtenerMantencion = async (req,res) => {
    
  const mantencion = await CheckDone.find().sort( { fecha: -1 } )
  if(!mantencion){
    return res.status(404).json({msg:'No Encontrado!'})
  }

  res.json(tronaduras)
}

export {
    agregarMantencion,
    obtenerMantencion
}
