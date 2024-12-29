import express from 'express';
import ModulosHumanasController from "../controllers/ModulosController.js"

const router = express.Router()

router.get('/modulos', ModulosHumanasController.getModulos );
router.get('/assuntos/:codMod', ModulosHumanasController.getAssuntos)

export default router