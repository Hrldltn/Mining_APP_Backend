import express from 'express'
import {registrar,perfil,confirmar,autenticar,olvidePassword,comprobarToken,nuevoPassword} from '../controllers/usuarioController.js'
import checkAuth from '../middleware/authMiddleware.js'

const router = express.Router()

//publico
router.post('/',registrar)
router.get('/confirmar/:token',confirmar)
router.post('/login',autenticar)
router.post('/recuperar-password',olvidePassword)
router.route('/recuperar-password/:token').get(comprobarToken).post(nuevoPassword)
//privado
router.get('/perfil',checkAuth,perfil)

export default router
