const CarteiraDigital = require("./CarteiraDigital.js");

const conta1 = new CarteiraDigital();

conta1.definirTitular("João Silva");

console.log(conta1.consultarTitular());

conta1.depositar(200);
console.log(`Saldo: ${conta1.consultarSaldo()}`);

conta1.sacar(50);
console.log(`Saldo: ${conta1.consultarSaldo()}`);

conta1.sacar(500);
console.log("\n" + conta1.exibirInformacoes());