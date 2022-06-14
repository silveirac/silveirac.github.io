// MESA DE TRABALHO - AULA 20 - CTD - PROGRAMAÇÃO IMPERATIVA

/*
Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:

  -  a média das idades das pessoas que responderam ótimo;
  -  a quantidade de pessoas que responderam regular;
  -  a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
*/

const espectadores = [];

function Espectador (idade, opiniao) {
    this.idade = idade;
    this.opiniao = opiniao;
    espectadores.push(this);
}

new Espectador(18, 3);
new Espectador(25, 3);
new Espectador(23, 2);
new Espectador(42, 1);
new Espectador(56, 1);
new Espectador(65, 1);
new Espectador(33, 2);
new Espectador(27, 3);
new Espectador(38, 3);
new Espectador(47, 2);
new Espectador(50, 1);
new Espectador(18, 2);
new Espectador(21, 3);
new Espectador(17, 1);
new Espectador(16, 3);

console.log(espectadores);



// a média das idades das pessoas que responderam ótimo;

let especOtimo = [];
espectadores.map(element => {
    if (element.opiniao == 3) {
        especOtimo.push(element.idade);
    }
});

let mediaEspecOtimo = (especOtimo.reduce(((acumulador, valor) => acumulador + valor)) / especOtimo.length).toFixed(2) 

console.log(`A média de idade dos espectadores que responderam ótimo é igual a ${mediaEspecOtimo}`);



// a quantidade de pessoas que responderam regular;
let especRegular = espectadores.filter(element => element.opiniao == 1);
console.log (`A quantidade de pessoas que responderam regular é igual a  ${especRegular.length}`);



// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let porcentBom = (espectadores.filter(element => element.opiniao == 2).length / espectadores.length) * 100;

console.log(`A porcentagem de pessoas que responderam bom entre todos os espectadores analisados foi: ${porcentBom.toFixed(2)}%`);