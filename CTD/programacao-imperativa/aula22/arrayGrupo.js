const Grupo = function () {
    this.lista = [];
    this.add = function (element) {
        this.lista.push(element);
    }
    this.media = function (sexo) {
    let altura = 0;
    let contador = 0;
    let txtSexo;
    if (sexo != 'M' && sexo != 'F') {
        this.lista.map(element => altura +=element.altura);
        contador = this.lista.length;
        txtSexo = 'todos os alunos';
    } else {
        this.lista.filter(function (element) {
            if (element.sexo == sexo) {
                altura += element.altura;
                contador++;
                txtSexo = sexo == 'M' ? 'homens' : 'mulheres';
            }
        });
    }
    return `A média de altura de ${txtSexo} é igual a ${(altura / contador).toFixed(2)}m`;
    };
    this.extremos = function () {
        let temp = this.lista.sort((a, b) => a.altura-b.altura);
        return `Menor altura: ${temp[0].altura}m | Maior altura: ${temp[temp.length-1].altura}m`;
    };
    this.contagem = function (sexo) {
        let txtSexo;
        if (sexo != 'M' && sexo != 'F') {
            return `A contagem total do número de alunos é igual a ${this.lista.length}.`;
        } else {
            txtSexo = sexo == 'M' ? 'homens' : 'mulheres';
            return `O número de alunos ${txtSexo} é igual a ${this.lista.filter(element => element.sexo == sexo).length}.`;
        }
    };
};

module.exports = Grupo;