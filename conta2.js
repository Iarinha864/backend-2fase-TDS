function criarConta(titular,saldoInicial) {
    let saldo = saldoInicial

    return {
        titular,
        depositar(valor) {
            if (valor <= 0) {
                console.log("valor do depósito inválido.");
                return; //Parar o processo.
            }
            saldo += valor;
        },
        sacar(valor) {
            if (valor >= saldo) {
                console.log("Saque relizado com sucesso!");
                return;
            }
            saldo -= valor;
        },
        get saldoAtual() {
            return saldo;
        },
    };
};

const contas = [criarConta("Alice", 3000), criarConta("Carla", 1000)];
//                                  0                           1

contas[0].depositar(-8);
contas[1].sacar(100);

contas.forEach((conta) => { //forEach > para cada item do array
    console.log(`${conta.titular} tem R$ ${conta.saldoAtual}`);
})
