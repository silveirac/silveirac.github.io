const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// .map()

let listNumbers = values.map(x => `${x} - Presente`);
console.log(listNumbers);

// .filter()

let evenNumbers = values.filter(y => y % 2 == 0);
console.log(evenNumbers);

// .reduce()

let sumTo10 = values.reduce((accumulator, value) => accumulator + value);
console.log(sumTo10);

// .forEach()

values.forEach(function (elemento) {
    console.log(elemento * 10);
});