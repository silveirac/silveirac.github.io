/*

FUNCOES - AULA 05 - 10/05/2022

******INTEGRANTES******
Cauê Silveira
Igor Avelar
João Victor de Oliveira
Josi Mota
Michel Vieira

*/

//micro desafio1 
// function teste1( x, y ) {
//     return y - x
// }

// teste1( 10,40 ) espera-se que retorne 30 



//micro desafio2

// function teste2( x, y ) {
//     return x * 2
//     console.log(x)
//     return x / 2
// }

// teste2( 10 ) espera-se que retorne 20

//Exercicio Função Simples 1

function conversao(pol) {
    let cent = 2.54 * pol;
    return cent
} 

conversao( 7 );
console.log(conversao(7))

//Exercicio Função Simples 2 

function stringParaUrl(texto) {
    return "http://www." + texto + ".com.br";
}
stringParaUrl("1 ");
console.log(stringParaUrl("digitalhouse"));


//Exercicio Função Simples 3

function adicionarExclamacao(texto) {
    return texto + "!";
}

console.log(adicionarExclamacao("Programação Imperativa"));

//Exercicio Função Simples 4

function idadeCachorro(idade_humana) {
    let idade_cachorro = 7 * idade_humana;
    console.log(idade_cachorro);
}

idadeCachorro(10);

//Exercício Função Simples 5

function salarioHora(salarioMensal, horasTrabalhadas) {
    let valorHora = salarioMensal / horasTrabalhadas;
    return valorHora;

};

console.log(salarioHora(2500, 160));

//Exercício Função Simples 6

function calcImc(peso, altura) {
    let imc;
    return imc = (peso / (altura * altura)) * 10000;
};

console.log(calcImc(90, 178));

//Exercício Função Simples 7

function minusculasParaMaiusculas(texto) {
    let maiusculas = texto.toUpperCase();
    console.log(maiusculas);
};

minusculasParaMaiusculas("casa digital");

//Exercício Função Simples 8

function tipo(param) {
    return typeof param;
};

console.log(tipo(true));

//Exercício Função Simples 9

function circunferencia(raio) {
    let circ = 2 * Math.PI * raio;
    return circ + "cm";
};

console.log(circunferencia(5));