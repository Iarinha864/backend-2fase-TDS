let saldoJose = 1000;
let saldoMario = 500;

const taxaJuros = 0.02;
const saldoComJuros = saldoJose * (1 + taxaJuros); o

const contaJose = {
  titular: "José",
  saldo: saldoJose
}

const contaMario = {
  titular:"Mario",
    saldo:saldoMario
};

const contas = [contaJose, contaMario]; //Array (lista)

contas.forEach((conta) => {
  console.log(`Titular: ${conta.titular} tem R$ ${conta.saldo}`);
});

contaJose.saldo = -5000;
console.log (`Saldo alterado sem controle:${contaJose.saldo}`);
