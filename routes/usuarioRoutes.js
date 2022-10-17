import express from 'express'
import {registrar,perfil,confirmar,autenticar,olvidePassword,comprobarToken,nuevoPassword,actualizarPerfil,actualizarPassword} from '../controllers/usuarioController.js'
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
router.put('/perfil/:id', checkAuth,actualizarPerfil)
router.put('/actualizar-password', checkAuth,actualizarPassword)

export default router
