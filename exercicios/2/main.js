// const Conversor = require("./conversor.js"); // CJS
import { Conversor } from './conversor.js'; // ESM

const Converter = new Conversor();

console.log(`25ºC = ${Converter.celsiusParaFahrenheit(25)}ºF.`);
console.log(`10km = ${Converter.kmParaMilhas(10)} milhas.`);
console.log(`150 minutos = ${Converter.minutosParaHoras(150)} horas.`);