const Conversor = require("./conversor.js");

const Converter = new Conversor();

console.log(`25ºC = ${Converter.celsiusParaFahrenheit(25)}ºF.`);
console.log(`10km = ${Converter.kmParaMilhas(10)} milhas.`);