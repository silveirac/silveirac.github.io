/* Métodos e Propriedades */


// .length
let nome = "Marcos";
let verdade = true;
let lista = [1, 2, 3, "quatro"];

console.log (nome[0]);
console.log (nome.length);

console.log (verdade.length); // retorna erro, pois .length não é um metodo do objeto "boolean"

console.log (lista[1]);
console.log (lista.length);
console.log (lista[3].length);

// .indexOf

let listaIndexOf = ["Cauê", "Larissa", "José"];
console.log (listaIndexOf.indexOf ("Larissa"));

// .slice

let textoSlice = "Digital House é dez!";
console.log (textoSlice.slice (8, 13)) //espera-se "House"
console.log (textoSlice.slice (-4)) // espera-se "dez!"
console.log (textoSlice.slice (8, -0)); // espera-se "House é dez!"

// .trim

let textoTrim = " Digital House ";
console.log (textoTrim.trim ()); // espera-se "Digital House"

// .split

let textoSplit = "Digital House";
console.log (textoSplit.split (" ")); // espera-se ["Digital", "House"]

// .replace

let textoReplace = "Digital House é dez!";
console.log (textoReplace.replace ("dez!", "mil!")); // espera-se "Digital House é mil!"


/* Métodos de Arrays */

let listaArray = ["Cauê", "Larissa", "Carlos"];

// .push
console.log (listaArray.push ("Pedro")); // espera-se ["Cauê", "Larissa", "Carlos", "Pedro"]

// .unshift
console.log (listaArray.unshift ("Pedro")); // espera-se ["Pedro", "Cauê", "Larissa", "Carlos", "Pedro"]

// .shift
console.log (listaArray.shift ()); // espera-se ["Cauê", "Larissa", "Carlos", "Pedro"]

// .pop
console.log (listaArray.pop ()); // espera-se ["Cauê", "Larissa", "Carlos"]

// .join
console.log (listaArray.join (", "));

// .indexOf
console.log (listaArray.indexOf ("Larissa"));

// .lastIndexOf
console.log (listaArray.lastIndexOf ("Cauê"));

// .includes
console.log (listaArray.includes ("Carlos"));

