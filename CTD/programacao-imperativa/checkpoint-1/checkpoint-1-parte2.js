// CTD - PROGRAMAÇÃO IMPERATIVA - TURMA 1
// CHECKPOINT 1 - PARTE 2
// Cauê Silveira


// 1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual é o menor.

// Solução 1 (Nested IF)
function maiorMenor (num1, num2, num3) {
    let maior;
    let menor;
    
    if (num1 > num2) {
        if (num1 > num3) {
            maior = num1;
            menor = num2 > num3 ? num3 : num2;
        } else {
            maior = num3;
            menor = num2;
        }

    } else if (num1 > num3) {
        maior = num2;
        menor = num3;

    } else if (num2 > num3) {
        maior = num2;
        menor = num1;
    } else {
        maior = num3;
        menor = num1;
    }

    return `${maior} é o maior valor e  ${menor} é o menor valor.`
}

console.log(maiorMenor(7, 15, 12)); //teste

// Solução 2 (Operador ternário)
function maiorMenor2 (num1, num2, num3) {
    let maior;
    let menor;

    if (num1 > num2) {
        maior = num1 > num3 ? num1 : num3;
        menor = num2 > num3 ? num3 : num2;
    } else {
        maior = num1 > num3 ? num2 :
                num2 > num3 ? num2 : num3;;
        menor = num1 > num3 ? num3 : num1;
    }
}

console.log(maiorMenor(27, 15, 21)); //teste



// 2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&).

function doadorDeSangue (idade) {
    return idade >= 18 || idade <= 67 ? "Pode doar sangue." : "Não pode doar sangue.";
}

console.log(doadorDeSangue(17)); //teste



// 3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

function positivoNegativo (num) {
    if (num === 0) {
        return "Zero não é nem positivo e nem negativo!";
    } else {
        return num > 0 ? "O valor é positivo!" : "O valor é negativo!";
    }
}

console.log(positivoNegativo(-17)) //teste

// 4. Faça um programa para a leitura de duas notas de um aluno.  
//      A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
//      A mensagem “Aprovado com Distinção”, se a média for igual a 10;
//      A mensagem “Reprovado” se a média for menor de do que 7;

function mediaAprovacao (nota1, nota2) {
    let media = (nota1 + nota2) / 2;

    if (media < 0 || media > 10) {
        return "Verifique as notas lançadas!";
    } else if (media < 7) {
        return "Reprovado."    
    } else if (media === 10) {
        return "Aprovado com Distinção!";
    } else {
        return "Aprovado";
    }
}

console.log(mediaAprovacao(10, 10));