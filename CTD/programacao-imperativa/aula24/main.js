/*
Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e 
notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá 
um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), 
nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso 
método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
*/

let Curso = require('./modules/curso.js');

// Criando 5 alunos
Curso.addAlunos("Diogo", [7, 8, 10], 2);
Curso.addAlunos("Rafael", [10, 9, 9], 5);
Curso.addAlunos("Valquíria", [8, 7, 10], 0);
Curso.addAlunos("Diego", [8, 8, 5], 3);
Curso.addAlunos("Henrique", [10, 10, 10], 1);
Curso.addAlunos("Cauê", [7, 6, 8], 3);

// Média de um aluno
console.log(Curso.turma[1].media().toFixed(2));

// Média dos alunos
console.log(Curso.turma.map(item => [item.nome, item.media().toFixed(2)]));

// Faltas de um aluno
console.log(Curso.turma[4].qtdFaltas);

// Adicionar 1 (uma) falta para um aluno
console.log(Curso.turma[2].nome, Curso.turma[2].qtdFaltas);
Curso.turma[2].faltas()
console.log(Curso.turma[2].nome, Curso.turma[2].qtdFaltas);

// Faltas de todos os alunos
console.log(Curso.turma.map(item => [item.nome, item.qtdFaltas]));