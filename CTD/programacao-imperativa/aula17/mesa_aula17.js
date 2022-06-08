/*
MESA DE TRABALHO - AULA 17 - PROGRAMAÇÃO IMPERATIVA - 07/06/2022

EQUIPE 7
 - CAUÊ SILVEIRA
 - MARCOS TULIO
*/

// Métodos avançados de array - Micro desafios

// 1.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let novoNumeros = numeros.map(function (elemento) {
    return elemento / numeros.reduce((acumulador, valor) => acumulador + valor);
})

console.log (novoNumeros);

// 2.
const palavras = ['Carro', 'Moto', 'Avião', 'Caminhão', 'Jetski'];

let palavrasMaior = (array, num) => 
    array.filter((element) => element.length > num);
    
console.log(palavrasMaior(palavras, 4));

// 3.

const alunos = [{nome: 'Carlos', nota: 8}, {nome: 'Pedro', nota: 7}, {nome: 'Joana', nota: 10}, {nome: 'Zeca', nota: 3}, {nome: 'Marcos', nota: 6}];

alunos.sort(function (a, b) {
    let nomeA = a.nome.toUpperCase();
    let nomeB = b.nome.toUpperCase();
    if (nomeA > nomeB) {
        return 1;
    } else if (nomeA < nomeB) {
        return -1;
    } 
    return 0;
});

console.log(alunos);


//
const nomes = ["pneumoultramicroscopicossilicovulcanoconiótico", "anticonstitucionalismo", "robison", "pa" ];

const nomesgrandes = nomes.filter((nomes) => {
    return nomes.length > 10  
});

console.log(nomesgrandes); // fiz esse e deu

