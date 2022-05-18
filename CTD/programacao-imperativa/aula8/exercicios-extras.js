// Exercícios Extras - Aula 8 - Programação Imperativa 17/06/2022
// Cauê Silveira

/* 1. Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que	 	 não	 serão	
    informados	valores	iguais)	e	escrever	o	maior	deles. */

function higher (num1, num2) {
    return num1 > num2 ?  `Maior valor: ${num1}` : `Maior valor: ${num1}`;
}

console.log(higher(4, 13)); //teste



/* 2. Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
    escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
    (não	é	necessário	considerar	o	mês	em	que	ela	nasceu). */

function canVote (ano) {
    let idade = 2022 - ano;
    if (idade >= 16) {
        return "Pode votar."
    } else {
        return "Não pode votar."
    }
}

console.log(canVote(1998)); //teste



/* 3. Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
    pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
    seguintes	mensagens:	
    ACESSO	PERMITIDO	caso	a	senha	seja	válida.	
    ACESSO	NEGADO	caso	a	senha	seja	inválida. */

function verifyPassword (senha) {
    if (senha == "1234") {
        return "ACESSO PERMITIDO";
    } else {
        return "ACESSO NEGADO";
    }
}

console.log(verifyPassword(1234)); //teste com 1234 tipo number
console.log(verifyPassword("1234")); //teste com 1234 tipo string



/* 4. As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
    dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
    programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	valor	total	da	compra.*/

function pricePerQuantity (q) {
    if (q < 12) {
        return q * 0.30;
    } else {
        return q * 0.25;
    }
}

console.log(pricePerQuantity(10)); // teste q < 12
console.log(pricePerQuantity(20)); // teste q >= 12



/*5. Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
    1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
    calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
    Fórmulas:	
    - para	homens:	(72.7	*	Altura)	– 58	
    - para	mulheres:	(62.1	*	Altura)	– 44.7*/ 

function wheight (height, sex) {
    if (sex === "male") {
        return `Seu peso ideal é ${(72.7 * height) - 58}kg.`
    } else {
        return `Seu peso ideal é ${(62.1 * height) - 44.7}kg.`
    }
}


console.log ( wheight (1.7, "male") ); //teste para sexo masculino
console.log ( wheight (1.7, "female") ); //teste para sexo feminino


