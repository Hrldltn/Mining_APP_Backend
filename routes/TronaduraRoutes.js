import express from 'express'

import {agregarTronadura} from '../controllers/tronaduraController.js'

const router = express.Router()
import checkAuth from '../middleware/authMiddleware.js'


router
    .route('/')
    .post(checkAuth,agregarTronadura)

export default router