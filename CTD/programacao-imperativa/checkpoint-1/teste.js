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

console.log(maiorMenor(7, 15, 12));

function maiorMenor2 (num1, num2, num3) {
    if (num1 > num2) {
        maior = num1 > num3 ? num1 : num3;
        menor = num2 > num3 ? num3 : num2;
    } else {
        maior = num1 > num3 ? num2 :
                num2 > num3 ? num2 : num3;;
        menor = num1 > num3 ? num3 : num1;
    }
}

console.log(maiorMenor(27, 15, 21));

