import CalculosModel from "../models/CalculosModel.js";
import ModulosHumanasModel from "../models/ModulosModel.js";
import Core from "../core/core.js"



class CalculosController {

    async calculate(req, res) {

        try {
            const data = req.body;
            console.log(data);

            var dataInicio = data.dataInicio
            var dataFim = data.dataFim
            var diasDaSemana = data.dias
            var feriados = data.feriados


            var resultado = Core.totalDias(dataInicio, dataFim, diasDaSemana, feriados)

            console.log(resultado)

            //const modulos = await ModulosHumanasModel.retornarModulos();
            //res.json(modulos);

        }catch (error) {
            console.error(error);
            res.status(500).json({error: 'Erro ao carregar os modulos'})
        }
    }

}

export default new CalculosController();