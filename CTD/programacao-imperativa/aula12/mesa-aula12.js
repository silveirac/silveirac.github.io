const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador (a, b) {
    let contadorA = 0;
    let contadorB = 0;

    for (let i = 0; i < a.length || i < b.length; i++) {
        if (a[i] > b[i]) {
            contadorA++;
        } else if (a[i] < b[i]) {
            contadorB++;
        } else {
            // caso a[i] = b[i];
        }
    }

    if (contadorA > contadorB) {
        return `O ganhador é Alicia!`;
    } else if (contadorA < contadorB) {
        return `O ganhador é Bob!`;
    } else {
        return `Houve um empate!`;
    }
}

console.log (encontrarGanhador (alicia, bob));

// digitalHouse()

function digitalHouse (num1, num2) {
    for (let i = 1; i <= 100; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            console.log (`${i} é Digital House`);
        } else if (i % num1 === 0) {
            console.log (`${i} é Digital`);
        } else if (i % num2 === 0) {
            console.log (`${i} é House`);
        } else {
            console.log (`${i} não é nem Digital, nem House.`)
        }
    }
}

console.log (digitalHouse(2, 3));

// sumArray()... Reloaded

paresAte50= [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]; //pares de 0 a 50;

function sumArray (numArray) {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return `Soma dos números do array é ${sum}.`;
}

console.log(sumArray(paresAte50));

// join()... Reloaded

cidade = ["A", "r", "a", "r", "a", "q", "u", "a", "r", "a", "!"];

console.log (cidade.join("")); //teste com o método .join()

function newJoin (stringArray) {
    let joined = "";
    for (let i = 0; i < stringArray.length; i++) {
        joined += stringArray[i];
    }

    return joined;
}

console.log (newJoin(cidade));


