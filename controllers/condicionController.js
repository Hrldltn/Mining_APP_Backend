import Condicion from '../models/CondicionesDB.js'

const agregarCondicion = async (req,res) => {
  const condicion = new Condicion (req.body)
  try {
    const condicionGuardada = await condicion.save()
    res.json ( condicionGuardada )
  } catch (error) {
    const e = new Error('token no valido!')
    return res.status(400).json({msg:e.message})
  }
}

const obtenerCondiciones = async (req,res) => {
    
  const condiciones = await Condicion.find().sort( { fecha: 1 } )
  if(!condiciones){
    return res.status(404).json({msg:'No Encontrado!'})
  }

  res.json(condiciones)
}

const obtenerCondicionesDia = async (req,res) => {
  let today = new Date();
  let query = {
      $expr: { // la siguiente es una expresión de agregación
        $and: [ // indica que cada comparación entre elementos del array se debe satisfacer
        { $eq: [ { $year:   '$fecha' }, { $year: today } ] },  // devuelve true si se cumple la igualdad de loss elementos
        { $eq: [ { $month:   '$fecha' }, { $month: today } ] },
        { $eq: [ { $dayOfMonth: '$fecha' }, { $dayOfMonth: today } ] } 
      ]
    }
  }
  try {
    const CondicionesDia = await Condicion.find(query)
    res.json(CondicionesDia)

    if(!CondicionesDia){
      return res.status(404).json({msg:'No Encontrado!'})
    }   
  } catch (error) {
    console.log(error)
  }

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
  condicion.Nombre = req.body.Nombre || condicion.Nombre
  condicion.modelo = req.body.modelo || condicion.modelo
  condicion.cantidad = req.body.cantidad || condicion.cantidad
  condicion.estado = req.body.estado || condicion.estado
  condicion.fecha = req.body.fecha || condicion.fecha
  condicion.observacion = req.body.observacion || condicion.observacion
  condicion.detallesMantencion = req.body.detallesMantencion || condicion.detallesMantencion
  condicion.detallesMalEstado = req.body.detallesMalEstado || condicion.detallesMalEstado
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
  eliminarCondicion,
  obtenerCondicionesDia
}