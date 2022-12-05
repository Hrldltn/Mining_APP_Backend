import express from 'express'
import { agregarCondicion, 
         obtenerCondiciones,
         obtenerCondicion,
         actualizarCondicion,
         eliminarCondicion,
         obtenerCondicionesDia} 
from '../controllers/condicionController.js'

import {agregarTronadura} from '../controllers/tronaduraController.js'
import checkAuth from '../middleware/authMiddleware.js'
import singleUpload from '../middleware/multer.js'


const router = express.Router()

router.route('/')
    .post(checkAuth,agregarCondicion)
    .get (checkAuth,obtenerCondiciones)
    
router.route('/Tronadura')
    .post(checkAuth,agregarTronadura)

router.route('/today')  
    .get (checkAuth,obtenerCondicionesDia)

router
    .route('/:id')
    .get(checkAuth,obtenerCondicion)
    .put(checkAuth,actualizarCondicion)
    .delete(checkAuth,eliminarCondicion)

export default router