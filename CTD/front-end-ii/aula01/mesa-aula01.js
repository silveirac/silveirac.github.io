// MESA DE TRABALHO - 01/08/2022 - FRONT END II

// INTEGRANTES
// CAUÊ SILVEIRA
// FELIPE TELES 

const numeros = [1, 2, 4, 8];

// COM FOR
let contador =  0;
for (i = 0; i < numeros.length; i++) {

    contador += numeros[i];
    console.log(contador);
    
}

// COM REDUCE
numeros.reduce((accumulated, current) => {
    
    console.log(accumulated + current);
    return accumulated = accumulated + current;

}, 0);