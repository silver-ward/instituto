const CarteiraDigital = require("./carteiraDigital.cjs");

const conta1 = new CarteiraDigital();

conta1.definirTitular("João Silva");

console.log(conta1.consultarTitular());

conta1.depositar(200);
console.log(`Saldo: ${conta1.consultarSaldo()}\n`);

functionCheck = conta1.sacar(50);
if (functionCheck){
    console.log("\nSaque realizado com sucesso.");
    console.log(`Saldo atual: ${conta1.consultarSaldo()}\n`);
}
else{
    console.log("\nSaldo insuficiente.");
    console.log(`Saldo atual: ${conta1.consultarSaldo()}\n`);
}

functionCheck = conta1.sacar(500);
if (functionCheck){
    console.log("\nSaque realizado com sucesso.");
    console.log(`Saldo atual: ${conta1.consultarSaldo()}\n`);
}
else{
    console.log("\nSaldo insuficiente.");
    console.log(`Saldo atual: ${conta1.consultarSaldo()}\n`);
}

console.log("\n" + conta1.exibirInformacoes());