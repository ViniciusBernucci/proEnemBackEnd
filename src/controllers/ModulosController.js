import ModulosHumanasModel from "../models/ModulosModel.js";


class ModulosHumanasController {
    async getModulos(req, res) {

        try {
            const modulos = await ModulosHumanasModel.retornarModulos();
            res.json(modulos);

        }catch (error) {
            console.error(error);
            res.status(500).json({error: 'Erro ao carregar os modulos'})
        }
    }


// Controlador para obter os assuntos de um módulo específico
    async getAssuntos(req, res){
        try {
            // Captura o parâmetro 'codMod' da URL
            const codMod = req.params.codMod;

            // Chama a função e retorna os resultados
            const assuntos = await ModulosHumanasModel.retornarAssuntos(codMod);

            if (assuntos.length > 0) {
                res.json(assuntos);
            } else {
                res.status(404).json({ mensagem: "Nenhum assunto encontrado com esse código" });
            }
        } catch (error) {
            console.error('Erro ao buscar assuntos:', error);
            res.status(500).json({ error: 'Erro ao buscar dados dos módulos' });
        }
    };

}

export default new ModulosHumanasController();




