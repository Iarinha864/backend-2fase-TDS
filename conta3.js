class ContaBancaria {
    #saldo; //# deixa privado

    constructor(titular, saldoInicial) {
      this.titular = titular;
      this.#saldo = saldoInicial;  
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("valor de depósito inválido.");
            return;
        }
        this.#saldo += valor;
    }
    sacar(valor) {
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente.");
            return;
        }
        this.#saldo -= valor;
    }
    get saldoAtual() {
        return this.saldo;
    }
}

const contas = [new ContaBancaria("Flavio", 1000), new ContaBancaria("Joel", 500)];

contas.forEach((conta) => console.log(`${conta.titular} tem R${conta.saldoAtual}`));
