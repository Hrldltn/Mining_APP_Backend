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
  export {
    agregarTronadura
  }