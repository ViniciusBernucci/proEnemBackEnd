import express from 'express';

import CalculosController from "../controllers/CalculosController.js"

const router = express.Router()

router.post('/calculo', CalculosController.calculate );

export default router