/* CONTROLE DE FLUXO - AULA 7 - 16.05.2022

GRUPO 5 
Cauê Silveira
Filipe Oliveira Silva
Michel Vieira do Nascimento
Icaro Regis de Almeida

*/

// Ex1. O que cada expressão retorna?

// 1.
console.log(!true); // false

// 2.
console.log(!false); // true

// 3.
// console.log(!!false true); //erro

// 4.
console.log(!!true); //true

// 5.
console.log(!1); //false

// 6.
console.log(!!1); //true

// 7.
console.log(!0); //true

// 8.
console.log(!!0); //false

// 9.
console.log(!!""); // false

// 10.

let x = 5;
let y = 9;

//10. A
if (x < 10 && x !== 5) { //false
    console.log(true);
} else {
    console.log(false);
}

//10. B

if (x > 9 || x === 5) { //true
    console.log(true);
} else {
    console.log(false);
}

//10.

if (!(x === y)) { //true
    console.log(true);
} else {
    console.log(false);
}


//Ex2. O que cada expressão retorna?

// 1.

x = 10;
y = "a";

console.log(y === "b" || x >= 10 ? true : false); //true

// 2.

x = 3;
y = 8;
console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y)) //false

// 3.

let str = "";
let msg = "haha!";
let eBonito = "false";

console.log(!((str || msg) && eBonito) ? true : false); //false