// Exercício “Pode Subir”

function podeSubir (altura, acompanhado) {

    if (altura < 1.2 || altura >= 2) {
        return "Acesso negado.";
    } else if (altura >= 1.4) {
        return "Acesso autorizado.";
    } else if (acompanhado === true) {
        return "Acesso autorizado somente com acompanhante.";
    } else {
        return "Acesso negado.";
    };
};

console.log(podeSubir(1.1, true));