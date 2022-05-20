// CTD - PROGRAMAÇÃO IMPERATIVA - TURMA 1
// Cauê Silveira

/* 
-- PRATOS --
 1 - Pipoca
 2 - Macarrão
 3 - Carne
 4 - Feijão
 5 - Brigadeiro
 */

function microondas (opcao, tempo) {
    // Checando qual é a opção e defindo o tempo padrão
    let tempoPadrao;
    
    if (opcao === 1) {
        tempoPadrao = 10;
    } else if (opcao === 2 || opcao === 5) {
        tempoPadrao = 8;
    } else if (opcao === 3) {
        tempoPadrao = 15;  
    } else if (opcao === 4) {
        tempoPadrao = 12;   
    } else {
        return "Prato inexistente!"
    }


    // Checando o tempo em relação ao tempo padrão do prato escolhido
    if (tempo < tempoPadrao) {
        return "Tempo insuficiente. Prato pronto, bom apetite!!!";
    } else  if (tempo > (2 * tempoPadrao) && tempo <= (3 * tempoPadrao)) {
        return "A comida queimou. Prato pronto, bom apetite!!!";
    } else if (tempo > (3 * tempoPadrao)) {
        return "Kabum! Prato pronto, bom apetite!!!";
    } else {
        return "Prato pronto, bom apetite!!!";
    }

}

console.log (microondas(2, 20));
