let Aluno = require("./aluno.js");

let Curso = {
    nome : "CTD",
    notaAprov : 7,
    faltasMax : 4,
    turma : [],
    addAlunos : function (nome, notas, qtdFaltas) {
        this.turma.push(new Aluno(nome, notas, qtdFaltas));
    }
};

module.exports = Curso;