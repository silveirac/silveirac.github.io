// 1.Pense na melhor forma de representar tais contas, e por quê? (discutir com a equipe sobre as diferentes estruturas e qual é a mais conveniente)

const banco = {
    clientes: [],
    consultarCliente: function consultarCliente (titular) {
        let clientes = this.clientes
        for (let i = 0; i < clientes.length; i++) {
            if (titular == clientes[i].titular) {
                return clientes[i];
            }
        }
    },
    deposito: function deposito (titular, qtd) {
        let clientes = this.clientes;
        for (let i = 0; i < clientes.length; i++) {
            if (titular == clientes[i].titular) {
                clientes[i].saldo += qtd;
                return `Depósito realizado, seu novo saldo é: R$${clientes[i].saldo}`;
            }
        }
    },
    saque: function saque (titular, qtd) {
        let clientes = this.clientes;
        for (let i = 0; i < clientes.length; i++) {
            if (titular == clientes[i].titular && clientes[i].saldo >= qtd) {
                clientes[i].saldo -= qtd;
                return `Saque realizado, seu novo saldo é: R$${clientes[i].saldo}`;
            } else if (titular == clientes[i].titular) {
                return "Saldo insuficiente!";
            }
        }
    }
}

function Conta (numeroConta, tipoConta, saldo, titular) {
    this.numeroConta = numeroConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
    this.titular = titular;
}

banco.clientes.push(new Conta (5486273622, 'Conta Corrente', 27771, 'Abigael Natte'));
banco.clientes.push(new Conta (1183971869, 'CConta Poupança', 8675, 'Ramon Connell'));
banco.clientes.push(new Conta (9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente'));
banco.clientes.push(new Conta (1761924656, 'Conta Poupança', 32415, 'Ansel Ardley'));

console.log(banco.saque('Ramon Connell', 8000));


