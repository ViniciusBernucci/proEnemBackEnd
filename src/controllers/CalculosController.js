import CalculosModel from "../models/CalculosModel.js";
import ModulosHumanasModel from "../models/ModulosModel.js";


class CalculosController {

    async calculos(req, res) {

        try {
            const modulos = await ModulosHumanasModel.retornarModulos();
            res.json(modulos);

        }catch (error) {
            console.error(error);
            res.status(500).json({error: 'Erro ao carregar os modulos'})
        }
    }

}