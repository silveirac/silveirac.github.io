/*
GRUPO 1

--Integrantes--
Cauê Silveira
Icaro Almeida


*/

// Exercício “Pode Subir”


// Solução 1
function podeSubir (altura, acompanhado) {
    if (altura < 1.20) {
        return false;
    } else if (altura < 1.4 && acompanhado) {
        return true;
    } else if (altura >= 1.4 && altura < 2) {
        return true;
    } else {
        return false;
    }
};

console.log(podeSubir(1.70, false));

// Solução 2
function podeSubir2 (altura, acompanhado) {
    if (altura < 1.2 || altura >= 2) {
        return "Acesso negado.";
    } else if (altura >= 1.4) {
        return "Acesso autorizado.";
    } else if (acompanhado) {
        return "Acesso autorizado por presença de acompanhante.";
    } else {
        return "Acesso negado.";
    }
}

console.log(podeSubir2(1.3, true));