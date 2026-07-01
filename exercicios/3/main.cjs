const CarteiraDigital = require("./carteiraDigital.cjs");

const conta1 = new CarteiraDigital();

conta1.definirTitular("João Silva");

console.log("Titular: " + conta1.consultarTitular());

conta1.depositar(200);
console.log(`Saldo: ${conta1.consultarSaldo()}`);

valorSaque = 50;
functionCheck = conta1.sacar(valorSaque);
if (functionCheck){
    console.log(`\nSaque de R$${valorSaque} realizado com sucesso.`);
    console.log(`Saldo atual: ${conta1.consultarSaldo()}`);
}
else{
    console.log(`\nNão foi possível realizar saque de R$${valorSaque}.`);
    console.log("Saldo insuficiente.");
    console.log(`Saldo atual: ${conta1.consultarSaldo()}`);
}

valorSaque = 500;
functionCheck = conta1.sacar(valorSaque);
if (functionCheck){
    console.log(`\nSaque de ${valorSaque} realizado com sucesso.`);
    console.log(`Saldo atual: ${conta1.consultarSaldo()}`);
}
else{
    console.log(`\nNão foi possível realizar saque de R$${valorSaque}.`);
    console.log("Saldo insuficiente.");
    console.log(`Saldo atual: ${conta1.consultarSaldo()}`);
}

console.log("\n" + conta1.exibirInformacoes());