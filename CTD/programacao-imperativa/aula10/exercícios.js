//CAUÊ SILVEIRA - CTD PART-TIME - PROGRAMAÇÃO IMPERATIVA

const lista = ["picanha", "linguiça toscana", "queijinho", "pão de alho", "coração", "asinha de frango"];

// .join - concetena todos os elementos do array utilizando um delimitador
console.log(`Lista de compras para o churrascão da DH: ${lista.join(", ")}`);
console.log (lista);

// .pop() - exclui um elemento no final do array
console.log(lista.pop());
console.log (lista);

// .push() - inclui um elemento no final do array
lista.push("asinha de frango");
console.log (lista);

// .shift() - exclui um elemento no início do array
console.log(lista.shift());
console.log (lista);

// .unshift() - inclui um elemento no início do array
lista.unshift("picanha");
console.log (lista);