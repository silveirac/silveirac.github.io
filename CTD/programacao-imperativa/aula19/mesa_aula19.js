const pessoal = [];

function Pessoa(sexo, altura) {
    this.sexo = sexo;
    this.altura = altura;
    pessoal.push(this);
}

new Pessoa('M', 1.78);
new Pessoa('F', 1.60);
new Pessoa('F', 1.65);
new Pessoa('M', 1.88);
new Pessoa('M', 1.70);
new Pessoa('F', 1.73);
new Pessoa('M', 1.65);
new Pessoa('F', 1.70);
new Pessoa('M', 1.71);
new Pessoa('M', 1.83);
new Pessoa('M', 1.84);
new Pessoa('M', 1.78);
new Pessoa('M', 1.82);
new Pessoa('M', 1.78);
new Pessoa('M', 1.97);

console.log(pessoal);

pessoal.sort((a, b) => a.altura-b.altura);

// a maior e a menor altura do grupo
console.log(`A menor e a maior altura do grupo são ${pessoal[0].altura}m e ${pessoal[pessoal.length - 1].altura}m, respectivamente.`);

// a média de altura das mulheres


let alturaMulheres = 0;
let contador = 0;

pessoal.filter(function (element) {
    if (element.sexo == 'F') {
        alturaMulheres += element.altura;
        contador++;
    }
})

console.log(`A média de altura das mulheres do grupo é: ${alturaMulheres/contador}m`);

// o número de homens.

console.log(`O número de homens do grupo é: ${pessoal.filter(element => element.sexo == "M").length}`);