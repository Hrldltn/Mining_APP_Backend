import express from 'express'
import { agregarMantencion, obtenerMantencion} from '../controllers/MantencionesController.js'
import checkAuth from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/')
    .post(checkAuth,agregarMantencion)
    .get (checkAuth,obtenerMantencion)


export default router