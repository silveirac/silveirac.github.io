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

/* por NOME */
const alunos = [{nome: 'Carlos', nota: 8}, {nome: 'Pedro', nota: 7}, {nome: 'Joana', nota: 10}, {nome: 'Zeca', nota: 3}, {nome: 'Marcos', nota: 6}];

alunos.sort(function (a, b) {
    let nomeA = a.nome.toUpperCase(); // para evitar problemas com case sensitive
    let nomeB = b.nome.toUpperCase(); // para evitar problemas com case sensitive
    if (nomeA > nomeB) {
        return 1;
    } else if (nomeA < nomeB) {
        return -1;
    } 
    return 0;
});

console.log(alunos);

/* por NOTA */

alunos.sort((a, b) => a.nota - b.nota);
console.log(alunos);

/* Exercício Integrador */

const produtos = []

function Produto(nome, preco, qtdVend) {
    this.nome = nome,
    this.preco = preco,
    this.qtdVend = qtdVend,
    this.valorTotalVendido = function () {
        return this.preco * this.qtdVend;
    }
    produtos.push(this)
};


// Cadastrando Produtos
new Produto('Arroz', 8.25, 1273);
new Produto('Milho', 4.25, 4850);
new Produto('Soja', 1.90, 8731);


// 1. Calcular o lucro total de todos os produtos;
function totalGeral () {
    let temp = produtos.map(element => element.valorTotalVendido());
    return temp.reduce((prev, curr) => prev + curr)
}

console.log(`Lucro Total: R$${totalGeral().toFixed(2)}`);


// 2. Permitir pesquisar um produto pelo nome e calcular seu lucro total;
function encontrarObjetoPeloNome (nome) {
    return produtos.find(element => element.nome == nome);
};

function lucroPorObjeto (objeto) {
    return `Lucro Individual (${objeto.nome}): R$${objeto.valorTotalVendido()}`;
};

console.log(lucroPorObjeto(encontrarObjetoPeloNome('Milho')));


// 3. Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;
function lucroMaiorQueX (valorRef) {
    let temp = produtos.filter(element => element.valorTotalVendido() > valorRef);
    return `O(s) produto(s) que vendeu(eram) mais do que R$${valorRef.toFixed(2)} é (são): ${temp.map(element => element.nome).join(" e ")}.`
};

console.log(lucroMaiorQueX(14000));


// 4. Classifique todos os produtos pela quantidade de dinheiro que geraram.
function ordenarPorLucro () {
    let temp = produtos.sort((a, b) => b.valorTotalVendido() - a.valorTotalVendido())
                       .map(element => element.nome);
    return `Rol de vendas: ${temp.join(" > ")}`
}

console.log(ordenarPorLucro());

//5. Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).
function novoPreco(nome, novoPreco) {
    return encontrarObjetoPeloNome(nome).preco = novoPreco;
}

novoPreco('Soja', 2.30);
console.log(encontrarObjetoPeloNome('Soja'));


// 6. Calcule o lucro total após pagar 45% do lucro em impostos.*

console.log(`O lucro total após dedução de impostos é: R$${(totalGeral() * 0.55).toFixed(2)}`);

