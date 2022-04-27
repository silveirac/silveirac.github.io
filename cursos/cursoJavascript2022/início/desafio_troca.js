let a = 7;
let b = 94;
let temp;

console.log(`Antes da troca: a = ${a} e b = ${b}`);

temp = a;
a = b;
b = temp;
temp = null;

console.log(`Depois da troca: a = ${a} e b = ${b}`);

// OU

a = 7;
b = 94;

console.log(`Antes da troca: a = ${a} e b = ${b}`);

[a, b] = [b, a];

console.log(`Depois da troca: a = ${a} e b = ${b}`);