import Condicion from '../models/CondicionesDB.js'

const agregarCondicion = async (req,res) => {
  const condicion = new Condicion (req.body)
  condicion.usuario = req.usuario._id
  try {
    const condicionGuardada = await condicion.save()
    res.json ( condicionGuardada )
  } catch (error) {
    const e = new Error('token no valido!')
    return res.status(400).json({msg:e.message})
  }
}

const obtenerCondiciones = async (req,res) => {
  const condiciones = await Condicion.find()
  
  if(!condiciones){
    return res.status(404).json({msg:'No Encontrado!'})
  }

  res.json(condiciones)
}
  
const obtenerCondicion = async (req,res) => {
  const {id } = req.params
  const condicion = await Condicion.findById(id)

  if(!condicion){
    return res.status(404).json({msg:'No Encontrado!!'})
  }

  res.json(condicion)
  
}

const actualizarCondicion = async (req,res) => {
  const {id } = req.params
  const condicion = await Condicion.findById(id)

  if(!condicion){
    return res.status(404).json({msg:'No Encontrado'})
  }

  //actualizar condicion
  condicion.nombre = req.body.nombre || condicion.nombre
  condicion.modelo = req.body.modelo || condicion.modelo
  condicion.cantidad = req.body.cantidad || condicion.cantidad
  condicion.estado = req.body.estado || condicion.estado
  condicion.fecha = req.body.fecha || condicion.fecha
  condicion.galla = req.body.galla || condicion.galla
  condicion.usuario = req.body.usuario || condicion.usuario

  try {
    const condicionActualizado = await condicion.save()
    res.json(condicionActualizado)
  } catch (error) {
    console.log(error)
  }
}

const eliminarCondicion = async (req,res) => {
  const {id } = req.params
  const condicion = await Condicion.findById(id)

  if(!condicion){
    return res.status(404).json({msg:'Condiciones No Encontradas'})
  }


  try {
    await condicion.deleteOne()
    console.log(condicion.usuario._id.toString() )
    console.log(req.usuario._id.toString() )
    res.json({msg:'Las condiciones de las perforadoras fueron eliminadas'})
  } catch (error) {
    console.log(error)
  }
}

export {
  agregarCondicion,
  obtenerCondiciones,
  obtenerCondicion,
  actualizarCondicion,
  eliminarCondicion
}