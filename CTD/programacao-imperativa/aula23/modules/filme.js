// Criação de função construtora
function Filme () {
    this.listaEspectadores = [],
    this.mediaIdade = function (op) {
        if ([1, 2, 3].includes(op)) {

            let strOp = op == 1 ? "regular" : (op == 2 ? "bom" : "ótimo");
            let temp = this.listaEspectadores.filter(element => element.opiniao == op);
            temp = temp.reduce((prev, curr) => prev + curr.idade, 0) / temp.length;

            return `A média de idade dos espectadores que classificaram o filme como ${strOp} é de ${temp.toFixed(0)} anos.`;

        } else if (op == null) {

            let temp = this.listaEspectadores.reduce((prev, curr) => prev + curr.idade, 0) / this.listaEspectadores.length;

            return `A média de idade de todos os espectadores do filme é de ${temp.toFixed(0)} anos.`;

            
        } else {
            
            return "Opinião inválida";

        }
    },
    this.contOpiniao = function (op) {
        if ([1, 2, 3].includes(op)) {
            let strOp = op == 1 ? "regular" : (op == 2 ? "bom" : "ótimo");
            let counter = 0;
            this.listaEspectadores.map(element => {
                if (element.opiniao == op) {
                    counter++;
                }
            })

            return `O número de espectadores que classificaram o filme como ${strOp} é ${counter}.`;

        } else if (op == null) {

            return `O número total de espectadores é ${this.listaEspectadores.length}.`

        } else {

            return "Opinião inválida";
        }
    },
    this.porcentOpiniao = function (op) {
        if ([1, 2, 3].includes(op)) {
            let strOp = op == 1 ? "regular" : (op == 2 ? "bom" : "ótimo");
            let counter = 0;
            this.listaEspectadores.map(element => {
                if (element.opiniao == op) {
                    counter++;
                }
            })

            let porcentagem = ((counter / this.listaEspectadores.length) * 100).toFixed(2) + '%'

            return `O número de espectadores que classificaram o filme como ${strOp} é ${porcentagem}.`;

        } else if (op == null) {

            return `O porcentagem total de espectadores é, obviamente, 100%.`

        } else {

            return "Opinião inválida";
        }
    }
}

module.exports = Filme;