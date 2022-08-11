export default function multiplicar() {
    let num1, num2;
    num1 = parseFloat(prompt("Insira o primeiro número:\n"));
    num2 = parseFloat(prompt("Insira o segundo número:\n"));
    let result = num1 * num2;
    alert (`${num1} * ${num2} = ${result}`);
};