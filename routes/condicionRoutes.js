import express from 'express'
import { agregarCondicion, 
         obtenerCondiciones,
         obtenerCondicion,
         actualizarCondicion,
         eliminarCondicion} 
from '../controllers/condicionController.js'
const router = express.Router()
import checkAuth from '../middleware/authMiddleware.js'


router.route('/')
    .post(checkAuth,agregarCondicion)
    .get (checkAuth,obtenerCondiciones)
    
router
    .route('/:id')
    .get(checkAuth,obtenerCondicion)
    .put(checkAuth,actualizarCondicion)
    .delete(checkAuth,eliminarCondicion)

export default router