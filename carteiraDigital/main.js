const CarteiraDigital = require("./CarteiraDigital.js");

const conta1 = new CarteiraDigital();

conta1.definirTitular("João Silva");

console.log(conta1.consultarTitular());