import Tronadura from '../models/TronadurasDB.js'

const agregarTronadura = async (req,res) => {
    const tronadura = new Tronadura (req.body)
    try {
      const tronaduraGuardada = await tronadura.save()
      res.json ( tronaduraGuardada )
    } catch (error) {
      const e = new Error('token no valido!')
      return res.status(400).json({msg:e.message})
    }
  }

const obtenerTronaduras = async (req,res) => {
    
    const tronaduras = await Tronadura.find().sort( { fecha: -1 } )
    if(!tronaduras){
      return res.status(404).json({msg:'No Encontrado!'})
    }
  
    res.json(tronaduras)
  }

  const actualizarTronadura = async (req,res) => {
    const {id } = req.params
    const tronadura = await Tronadura.findById(id)
  
    if(!tronadura){
      return res.status(404).json({msg:'No Encontrado'})
    }
  
    //actualizar condicion
    tronadura.Nombre = req.body.Nombre || condicion.Nombre
    tronadura.fecha = req.body.fecha || tronadura.fecha
    tronadura.Fecha_programada = req.body.Fecha_programada || tronadura.Fecha_programada
    tronadura.tabla_columna = req.body.tabla_columna || tronadura.tabla_columna
    tronadura.tabla_contenido = req.body.tabla_contenido || tronadura.tabla_contenido
    tronadura.usuario = req.body.usuario || tronadura.usuario
    tronadura.user = req.body.user || tronadura.user
  
    try {
      const tronaduraActualizada = await tronadura.save()
      res.json(tronaduraActualizada)
    } catch (error) {
      console.log(error)
    }
  }
  
  const eliminarTronadura = async (req,res) => {
    const {id } = req.params
    const tronadura = await Tronadura.findById(id)
  
    if(!tronadura){
      return res.status(404).json({msg:'No Encontrado'})
    }
  
  
    try {
      await tronadura.deleteOne()
      res.json({msg:'La Tronadura fue eliminada'})
    } catch (error) {
      console.log(error)
    }
  }
  export {
    agregarTronadura,
    obtenerTronaduras,
    actualizarTronadura,
    eliminarTronadura
  }