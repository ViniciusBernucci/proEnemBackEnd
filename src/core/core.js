//Calculos do resultado final


class Core {


//-----> O que espera receber do front <-------

// 1 - Data Inicio , Data Fim do planejamento
// 2 - Dias da semana que deseja estudar
// 3 - Se vai estudar em feriados?


//--> DEFINIR O NUMERO TOTAL DE DIAS DE ESTUDO

    stringParaData(dataString) {
        var partes = dataString.split("/");
        var dia = parseInt(partes[0], 10);
        var mes = parseInt(partes[1], 10) - 1; // Subtrai 1 porque os meses são indexados a partir de 0
        var ano = parseInt(partes[2], 10);
        return new Date(ano, mes, dia); }

    totalDias(vDataInicio, vDataFim, vDiasDaSemana, vFeriados) {

        let dataInicio = this.stringParaData(vDataInicio)
        let dataFim = this.stringParaData(vDataFim)
        let diasDaSemana = vDiasDaSemana
        let feriados = vFeriados == true ? 11 : 0   // true or false


        //Formatar datas
        let diferencaMilisegundos  = dataFim.getTime() - dataInicio.getTime();
        let diferencaDias = Math.floor(diferencaMilisegundos/ (1000 * 60 * 60 * 24));

        console.log(diferencaDias)


        //Quantos dias por semana vai estudar
        let diasTotal = (diferencaDias/7) * diasDaSemana

        console.log(diasTotal)


        //Somar todos os dias
        let totalDeDias = diasTotal - feriados - diasDaSemana

        return totalDeDias
    }


// 4 - Os conteúdos que vao estar inclusos no planejamento




}

export default new Core

