// CTD - PROGRAMAÇÃO IMPERATIVA - MESA AULA 10 - 24/05/2022

// INTEGRANTES

// CAUÊ SILVEIRA
// EDUARDO SERODIO
// ICARO ALMEIDA


///////////////////////////////////////////////////////////////////////////////////////
//      Convertendo strings em letras minúsculas para letras maiúsculas              //
///////////////////////////////////////////////////////////////////////////////////////

let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "a vida é bela"]

function converterMaiusculas (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    }

    return array
}

console.log (converterMaiusculas(filmes));



///////////////////////////////////////////////////////////////////////////////////////
//      Transferir elementos de um array para outro convertendo para maiúsculas      //
///////////////////////////////////////////////////////////////////////////////////////

let filmes2 = ["star wars", "totoro",  "rocky", "pulp fiction",  "a vida é bela"]
let filmes3 = [];

function transferenciaDeElementos (array1, array2) {
    for (let i = 0; i < (array1.length + array2.length); i++) {
        array2.push(array1.shift().toUpperCase());
}
    return array2;
}

console.log (transferenciaDeElementos(filmes2, filmes3));



///////////////////////////////////////////////////////////////////////////////////////
//      Convertendo strings em letras minúsculas para letras maiúsculas              //
///////////////////////////////////////////////////////////////////////////////////////

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararClassificações (asia, europa) {
    let comparacaoAsiaEuropa = [];
    
    for (let i = 0; i < asia.length || i < europa.length; i++) {
        comparacaoAsiaEuropa[i] = (asia[i] === europa[i]);
    }

    return comparacaoAsiaEuropa;

}

console.log (compararClassificações(asiaScores, euroScores));



///////////////////////////////////////////////////////////////////////////////////////
//                                   Extras                                          //
///////////////////////////////////////////////////////////////////////////////////////


// 1.
const participanteA = ["Cauê", 5, 8, 4, 9, 5];
const participanteB = ["Eduardo", 8, 7, 8, 6, 8];
const participanteC = ["Ícaro", 7, 5, 10, 8, 3];

const participantes = [participanteA, participanteB, participanteC];

// 2. MÉDIA DAS PONTUAÇÕES
function pontuacaoMedia (participante) {
    let media = 0;
    for (let i = 1; i < participante.length; i++) {
        media = media + (participante[i] / 5);
    }

    return media;
}

console.log (pontuacaoMedia (participanteA));

// 3. MAIOR PONTUAÇÃO
function pontuacaoMaior (participante) {
    let pontuacao = 0;
    for (let i = 1; i < participante.length; i++) {
        pontuacao = (pontuacao < participante[i]) ? participante[i] : pontuacao;
    }

    return pontuacao;

}

console.log (pontuacaoMaior(participanteC));

// 4. VERIFICAR OS GANHADORES
function verificarGanhadores (participantes) {
  
    let tempMedia = 0;
    let ganhadorMedia;
    for (let i = 0; i < participantes.length; i++) {
        if (tempMedia <= pontuacaoMedia (participantes[i])) {
            tempMedia = pontuacaoMedia (participantes[i]);
            ganhadorMedia = participantes[i][0];
        }
    }
    
    let tempMaior = 0;
    let ganhadorMaior;
    for (let i = 0; i < participantes.length; i++) {
        if (tempMaior <= pontuacaoMaior (participantes[i])) {
            tempMaior = pontuacaoMaior (participantes[i]);
            ganhadorMaior = participantes[i][0];
        }
    }

    return `O participante ${ganhadorMedia} foi o ganhador da modalidade "Média" com pontuação média igual a ${tempMedia}. E o participante ${ganhadorMaior} foi o ganhador da modalidade "Maior" com a maior pontuação igual a ${tempMaior} `;

}

console.log (verificarGanhadores(participantes));

