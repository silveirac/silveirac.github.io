//Micro desafios - Passo 1 e Passo 2

let Aluno = function (nome = "Aluno", qtdFaltas = 0, notas = []) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;
    this.calcularMedia = function () {
        let tempMedia = (this.notas.reduce((previous, current) => previous + current) / this.notas.length);
        return tempMedia;
    };
    this.faltas = function () {
        this.qtdFaltas++;
    };
};


module.exports = Aluno;
