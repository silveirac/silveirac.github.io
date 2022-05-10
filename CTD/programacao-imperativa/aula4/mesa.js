const Nome = "José";
let sobrenome = "da Silva";
let idade = 27;
let peso =  83.5;
let altura = 1.7;
let plano = true;
let imc;

imc = peso / (altura * altura);

console.log(Nome + " " + sobrenome + " tem " + idade + " anos e seu índice de massa corporal é de " + imc);

//OU

console.log(`${Nome} ${sobrenome} tem ${idade} anos e seu índice de massa corporal é de ${imc}`);