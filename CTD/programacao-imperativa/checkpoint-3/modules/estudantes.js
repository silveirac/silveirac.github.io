// Micro desafio - Passo 7

let Aluno = require ("./aluno");

const Estudantes = [];
Estudantes.push(
    new Aluno ("Cauê", 4, [5, 9, 10]),
    new Aluno ("Cairo", 2, [6, 4, 8]),
    new Aluno ("Patrick", 1, [8, 9, 8])
);

module.exports = Estudantes;