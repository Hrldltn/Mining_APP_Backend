import express from 'express'

import {agregarTronadura,
    obtenerTronaduras,

    actualizarTronadura,
    eliminarTronadura,
    obtenerTronadura} from '../controllers/tronaduraController.js'

const router = express.Router()
import checkAuth from '../middleware/authMiddleware.js'


router
    .route('/')
    .post(checkAuth,agregarTronadura)
    .get (checkAuth,obtenerTronaduras)

router
    .route('/:id')
    .get(checkAuth,obtenerTronadura)
    .put(checkAuth,actualizarTronadura)
    .delete(checkAuth,eliminarTronadura)
    
export default router