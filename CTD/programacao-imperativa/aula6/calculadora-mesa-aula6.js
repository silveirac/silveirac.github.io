// Calculadora

function add (a, b) {
    return a + b;
};

function sub (a, b) {
    return a - b;
};

function mult (a, b) {
    return a * b;
};

function div (a, b) {
    return a / b;
};

console.log("-------------- Teste de Operações / Calculador --------------");
console.log(add(489, 215));
console.log(sub(976, 645));
console.log(mult(32, 12));
console.log(div(265, 5));
console.log(div(265, 0));

// FUNÇÕES EXTRAS

function quadradoDoNumero (num) {
    return mult(num, num)
};

function mediaDeTresNumeros (num1, num2, num3) {
    return div (add(add(num1, num2), num3), 3);
};

function calculaPorcentagem (num, percent) {
    return div (mult(num, percent), 100);
};

function geradorDePorcentagem (num1, num2){
    return `${mult(div(num1, num2), 100)}%`;

};

console.log (quadradoDoNumero (5) );
console.log (mediaDeTresNumeros (5, 3, 9) );
console.log (calculaPorcentagem (60, 25) );
console.log (geradorDePorcentagem (12, 240));