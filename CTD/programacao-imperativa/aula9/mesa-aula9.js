/*

GRUPO 6 Cauê Silveira

Filipe Silva
Josi Santos
Matheus Ribeiro
Michel Vieira

*/




////////////////////////////////////////////
//          Arrays e Coleções             //
////////////////////////////////////////////

let arrayA = [1, 2, 3, 4, 5];
let arrayB = [1, 2, 3, 4, 5];
let arrayC = [6, 2, 3, 4, 7]

// A. Acessar elementos específicos de um array.

console.log(arrayA[3]); // espera-se "4"

// B. Modificar cada um dos elementos de um array e imprimi-los no console.

console.log (arrayA);
arrayA = ["A", "B", "C", "D", "E"];
console.log (arrayA); // teste

// C. Adicionar elementos a um array.

arrayA.push ("F");
console.log (arrayA);

// D. Extrair elementos de um array.

arrayA.shift ();
console.log (arrayA);

// E. Comparar elementos de um array com os elementos de outro.

console.log ( (arrayB[1] === arrayC[1]) ? "São iguais" : "São diferentes" );
console.log ( (arrayB[0] === arrayC[0]) ? "São iguais" : "São diferentes" );



/* O que esses códigos retornam? */

// 1. Retorna erro, pois busca o elemento cujo index é igua a 5, mas o mesmo não existe.

// 2. Retorna o elemento [0] ("Spiderman") do elemento [1] (que é um array) dentro do array principal.

// 3. Retorna o elemento [5] (str = "una string qualquer") do elemento [2] do array grupodDeAmigos.




////////////////////////////////////////////
//           Array Invertido              //
////////////////////////////////////////////

// 1. 

function imprimirInverso (array) {
    for (let i = 1; (array.length - i) >= 0; i++) {
        console.log (array[array.length - i]);
    }
}

let x = [1, 2, 3, 4, 5];
imprimirInverso (x);


// 2.

function inverter (array) {
    let invertedArray = [];

    for (let i = 1; (array.length - i) >= 0; i++) {
        invertedArray.push ( array[array.length - i] );
    }
    return invertedArray;
}

console.log (inverter (x));




////////////////////////////////////////////
//             somarArray()               //
////////////////////////////////////////////

function somarArray (array) {
    let soma = 0; //se não definir o valor 0, retornará NaN
    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i];
    }
    return soma;
}

console.log ( somarArray (x) );