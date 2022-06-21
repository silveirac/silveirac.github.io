// Importando
const p = require("./arrayPessoa");
const g = require("./arrayGrupo");

// Instanciando um novo grupo
let grupo = new g();

// Adicionando pessoas a este grupo
grupo.add(new p('M', 1.78));
grupo.add(new p('F', 1.65));
grupo.add(new p('M', 1.88));
grupo.add(new p('M', 1.70));
grupo.add(new p('F', 1.60));
grupo.add(new p('F', 1.73));
grupo.add(new p('M', 1.65));
grupo.add(new p('F', 1.70));
grupo.add(new p('M', 1.71));
grupo.add(new p('M', 1.83));
grupo.add(new p('M', 1.84));
grupo.add(new p('M', 1.78));
grupo.add(new p('M', 1.82));
grupo.add(new p('M', 1.78));
grupo.add(new p('M', 1.97));


//Testes
console.log(grupo);

// A média de altura das mulheres
console.log(grupo.media('F'));

// A maior e a menor altura do grupo
console.log(grupo.extremos());

// O número de homens
console.log(grupo.contagem('M'));