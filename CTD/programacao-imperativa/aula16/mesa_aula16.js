//EQUIPE 4
// CAUÊ SILVEIRA
// DIEGO OLIVEIRA
// FILIPE SILVA
// FRANCISCO SILVA

// 1. FIZZ BUZZ

let fizzBuzz = (num1, num2, word1, word2) => {
    for (let i = 1; i <= 100; i++) {
        if (i % num1 == 0) {
            console.log(`${i} - ${i % num2 == 0 ? word1+word2 : word1}`);
            
        } else if (i % num2 == 0) {
            console.log(`${i} - ${word2}`);
            
        } else {
            console.log(`${i} - Nem ${word1} e nem ${word2}`);
        }
    }
}

fizzBuzz(2, 3, 'Digital', 'House');

//2.

// com for
let fatorial1 = (num) => {
    let fat = 1;
    if(num === 0){
    
      return console.log(fat);
      
    } else {
    
      for (let i = num; i > 1 ; i--) {
      fat *= i;
      }
    
      return console.log(fat);
 
    }
}

fatorial (65);

//sem for e com recursividade
let fatorial2 = num => {
    if (num == 0 || num == 1) {
        return 1;
    } else if (num > 1) {
        return num * fatorial2(num - 1); //recursividade
    } else if (num < 0) {
        return `Fatorial de número negativo não existe!`;
    } 
}

console.log(fatorial2 (5));