//MESA DE TRABALHO - AULA 18 - PROGRAMAÇÃO IMPERATIVA - 08/06/2022
// EQUIPE 1

//1. Loop de Pares

function loopDePares (num) {
    for (let i = 0; i <= 100; i++) {
        console.log((num + i) % 2 === 0 ? `O número ${num + i} é par` : (num + i)); 
    }
}

loopDePares(7);

//2. Loop ímpares com palavra
function loopDeImpares (num, str) {
    for (let i = 0; i <= 100; i++) {
        console.log((num + i) % 2 === 1 ? `${num + i} - ${str}`: (num + i)); 
    }
}

loopDeImpares(7, 'Ímpar');

// 3. Soma
function soma (num) {
    if (num > 0) {
    num = num + soma(num - 1);
    }
    return num;
}

console.log (soma(5));


// 4. Novo Array

function newArray (num) {
    let array1 = [];
    for (let i = 1; i <= num; i++) {
        array1.push(i);
    }
    return array1;
}

console.log(newArray(5));

// 5. string.split()

function split (str) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        array.push(str[i]);
    }
    return array;
}

console.log(split("DigitalHouse"));

// 6. Mover os zeros para o final
const array6 = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];

function moverZeros (array) {
    let [zeros, naoZeros] = [[], []]; 
    array.filter (element => element == 0 ? zeros.push(element) : naoZeros.push(element));
    return naoZeros.concat(zeros);
}

console.log(moverZeros(array6));

// 7. Lidando com dois arrays

const array7a = [1, 2, 3]
const array7b = ["o", "l", "á"]

function arrayHandler(array1, array2) {
    for (let i = 0; i < array1.length || i < array2.length; i++) {
        console.log (`Eu sou ${array1[i]} e eu sou ${array2[i]}`);
    }
};

arrayHandler(array7a, array7b);

// 8. Arrays de objetos

function arrayObjects (num) {
    let objetos = [];
    for (let i = 1; i <= num; i++) {
        objetos.push({valor: i});
    }
    return objetos;
}

console.log(arrayObjects(7));

// 9.Arrays de objetos 2


function arrayObjectsTwo(num, str) {
    let objetosDois = [];
    for (let i = 1; i <= num; i++) {
        objetosDois.push({[str] : i});
    }
    return objetosDois;
}

console.log(arrayObjectsTwo(7, 'tchau'))