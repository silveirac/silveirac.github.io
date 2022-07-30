const produtos = [
    {
    nome : "celular",
    valor : 1785.50,
    qualidade : 8,
    status : true
    },
    {
        nome : "tenis",
        valor : 450.00,
        qualidade : 10,
        status : true
    },
    {
        nome : "mouse",
        valor : 150.0,
        qualidade : 4,
        status : true
    }

];

const carrinho = {
    produtos : produtos,
    valor : function (min, max) {
        this.produtos =  this.produtos.filter(element => element.valor >= min && element.valor <= max);
        return this.produtos;
    },
    qualidade : function (qualidade) {
        this.produtos = this.produtos.filter(element => element.qualidade >= qualidade);
        return this.produtos;
    },
    status : function () {
        this.produtos = this.produtos.filter(element => element.status >= true)
        return this.produtos;
    }
};

carrinho.valor(100, 600);
carrinho.qualidade(6);
carrinho.status();
console.log(carrinho.produtos);