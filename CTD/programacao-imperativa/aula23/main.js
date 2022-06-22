// Importando módulos
let Espectador = require("./modules/espectador.js");
let Filme = require("./modules/filme.js");

// Instanciando um novo objeto 'Filme'
const vingadoresUltimato = new Filme();

// Inserir espectadores no objeto 'Filme' criado
vingadoresUltimato.listaEspectadores.push(new Espectador(18, 3));
vingadoresUltimato.listaEspectadores.push(new Espectador(25, 3));
vingadoresUltimato.listaEspectadores.push(new Espectador(23, 2));
vingadoresUltimato.listaEspectadores.push(new Espectador(42, 1));
vingadoresUltimato.listaEspectadores.push(new Espectador(56, 1));
vingadoresUltimato.listaEspectadores.push(new Espectador(65, 1));
vingadoresUltimato.listaEspectadores.push(new Espectador(33, 2));
vingadoresUltimato.listaEspectadores.push(new Espectador(27, 3));
vingadoresUltimato.listaEspectadores.push(new Espectador(38, 3));
vingadoresUltimato.listaEspectadores.push(new Espectador(47, 2));
vingadoresUltimato.listaEspectadores.push(new Espectador(50, 1));
vingadoresUltimato.listaEspectadores.push(new Espectador(18, 2));
vingadoresUltimato.listaEspectadores.push(new Espectador(21, 3));
vingadoresUltimato.listaEspectadores.push(new Espectador(17, 1));
vingadoresUltimato.listaEspectadores.push(new Espectador(16, 3));

// a média das idades das pessoas que responderam ótimo;
console.log(vingadoresUltimato.mediaIdade(3));

// a quantidade de pessoas que responderam regular;
console.log(vingadoresUltimato.contOpiniao(1));

// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
console.log(vingadoresUltimato.porcentOpiniao(2));
