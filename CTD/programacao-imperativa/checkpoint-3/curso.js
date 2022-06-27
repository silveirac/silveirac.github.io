//Micro desafios - Passo 3, Passo 4, Passo 5, Passo 6
let Aluno = require("./modules/aluno.js");
let Estudantes = require("./modules/estudantes.js");

const Curso = {
    nome : "Certified Tech Developer",
    notaAprov : 7,
    faltasMax : 3,
    turma : Estudantes,
    addAluno : function (nome = "Aluno", qtdFaltas = 0, notas = []) {
        this.turma.push(new Aluno (nome, qtdFaltas, notas))
    },
    aprovAluno : function (indice) {
        if (this.turma[indice].qtdFaltas < this.faltasMax) {

            return this.turma[indice].calcularMedia() >= this.notaAprov ? true : false;

        } else if (this.turma[indice].qtdFaltas == this.faltasMax) {

            return this.turma[indice].calcularMedia() >= (1.1 * this.notaAprov) ? true : false;

        } else {

            return false;
        }
    },
    aprovTurma : function () {
        return this.turma.map(element => this.aprovAluno(this.turma.indexOf(element)) == true);
    }
}

// testando método calcularMedia() (Aluno)
console.log(Curso.turma[1].calcularMedia());

// testando método faltas() (Aluno)
console.log(Curso.turma[1].qtdFaltas);
Curso.turma[1].faltas()
console.log(Curso.turma[1].qtdFaltas);

// testando método .addAluno()
Curso.addAluno("Marcos", 3, [7, 7, 8]);
console.log(Curso);

// testando método aprovAluno()
console.log(Curso.aprovAluno(0));

// testando método aprovTurma()
console.log(Curso.aprovTurma());
