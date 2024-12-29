import pool from "../server/conn.js"


class ModulosHumanasModel {
        async retornarModulos() {
                // Executa a consulta diretamente usando pool.query()
                const { rows } = await pool.query('SELECT * FROM hmodulos');
                // 'rows' contém os resultados da consulta
                return rows;
        }

        // Função para retornar os assuntos de cada módulo
        async retornarAssuntos(vCodMod) {

                const { rows } = await pool.query('SELECT * FROM hassuntos WHERE cod_modulo = $1',
                    [vCodMod] );

                return rows;

        }

}

export default new ModulosHumanasModel();


















