//Calculos do resultado final
import axios from "axios";


class Core {


//-----> O que espera receber do front <-------

// 1 - Data Inicio , Data Fim do planejamento
// 2 - Dias da semana que deseja estudar
// 3 - Se vai estudar em feriados?


//--> DEFINIR O NUMERO TOTAL DE DIAS DE ESTUDO
    //Funcao para formatar a data de entrada
    stringParaData(dataString) {
        var partes = dataString.split("/");
        var dia = parseInt(partes[0], 10);
        var mes = parseInt(partes[1], 10) - 1; // Subtrai 1 porque os meses são indexados a partir de 0
        var ano = parseInt(partes[2], 10);
        return new Date(ano, mes, dia); }

    totalDias(vDataInicio, vDataFim, vDiasDaSemana, vFeriados) {

        let dataInicio = this.stringParaData(vDataInicio)
        let dataFim = this.stringParaData(vDataFim)

        let diasDaSemana = vDiasDaSemana // uma array como numeros de 0 a 6

        let feriados = vFeriados   // true or false

        //Formatar datas para diferença de dias
        let diferencaMilisegundos  = dataFim.getTime() - dataInicio.getTime();

        //Voltar para o formato de datas
        let diferencaDias = Math.floor(diferencaMilisegundos/ (1000 * 60 * 60 * 24));

        //Adiciona todos os dias do intervalo de estudo do aluno em um array
        let i;
        let diasDeEstudo = []
        for (i = 0; i <= diferencaDias; i++ ) {

            let data =  new Date(dataInicio);
            data.setDate(data.getDate() + i)

            let diadaSemana = data.getDay();

            if (diasDaSemana.includes (diadaSemana)) {
                let dataFormatada = data.toISOString().split('T')[0];
                diasDeEstudo.push(dataFormatada)
            }
        }

        let partesInicio = vDataInicio.split("/");
        let anoInicio = parseInt(partesInicio[2], 10);

        let partesFim = vDataFim.split("/");
        let anoFim = parseInt(partesFim[2], 10);


        feriados = []
        if(anoFim - anoInicio == 0) {
            let feriadosNacionais = obterFeriados(anoInicio)

            console.log("feriados Nacionais")
            console.log (typeof (feriadosNacionais));

            feriadosNacionais.forEach(feriado => {
                if(diasDeEstudo.includes(feriado.date)) {
                    feriados.push(feriado.date)
                }
            })
        }else {
            console.log ("ELSE")
            obterFeriados (anoInicio)
            obterFeriados(anoFim)
        }

        return feriados
    }


}

async function obterFeriados(ano) {
    try {
        const response = await axios.get(`https://brasilapi.com.br/api/feriados/v1/${ano}`);
        return response.data
    } catch (error) {
        console.error("Erro ao obter feriados:", error.message);
    }
}

export default new Core

// 4 - Os conteúdos que vao estar inclusos no planejamento
