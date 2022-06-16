// CRIE UM METODO CONSTRUTOR ALUNO COM A PROPRIEDADES :
// NOME
// SEXO
// ID
// NOTAS
// TURMA
function Aluno(nome, sexo, id, notas, turma){//função construtora 
    this.nome = nome;
    this.sexo = sexo;
    this.id = id;
    this.notas = notas;
    this.turma = turma;
    this.media = function(){
        let media = this.notas.reduce( function(acumulador, item ){
                
            return acumulador + item;
        } );
        media = media / this.notas.length;
        return media;
    }
}

// DEPOIS CRIE UM ARRAY LISTA DE ALUNOS E CRIE UM OBJETO POR ALUNO
const alunos = []
alunos.push ( new Aluno ("Michel","Masculino", 15, [8, 6, 7], 2),
    new Aluno ("joão","Masculino", 18, [8, 5, 4], 2),
    new Aluno ("Marcelina","Feminina", 13, [6, 7, 7], 2),
    new Aluno ("Marcia","Feminina", 14, [10, 5, 9], 2),
    new Aluno ("Pedro","Masculino", 19, [1, 5, 7], 2),
    new Aluno ("Lara","Feminina", 22, [9, 5, 7], 2),
    new Aluno ("joaquina","Feminina", 23, [2, 7, 6], 2),
    new Aluno ("Beatriz","Feminina", 24, [9, 5, 4], 2),
    new Aluno ("Guilherme","Masculino", 25, [7, 5, 8], 2),
    new Aluno ("Igor","Masculino", 26, [2, 8, 3], 2)
);

console.log(alunos);

// MEDIA TOTAL DE NOTAS 
function mediaTotal (array) {
    let arrayMedias = array.map(element => element.media());
    return arrayMedias.reduce((total, item) => total + item) / arrayMedias.length;
}

console.log(`A média total dos alunos é: ${mediaTotal(alunos).toFixed(2)}.`);

// MEDIA DE ALUNOS HOMENS E MULHERES
function mediaHomensMulheres (array) {
    let arrayHomens = [];
    let arrayMulheres = [];
    array.filter(element => element.sexo == "Masculino" ? arrayHomens.push(element.media()) : arrayMulheres.push(element.media()));
    let mediaHomens = arrayHomens.reduce((total, item) => total + item) / arrayHomens.length;
    let mediaMulheres = arrayMulheres.reduce((total, item) => total + item) / arrayMulheres.length;
    return `A média dos homens é igual a ${mediaHomens.toFixed(2)} e a das mulheres é igual a ${mediaMulheres.toFixed(2)}.`
}

console.log(mediaHomensMulheres(alunos));