const Pessoa = require('./pessoa.js');

const joao = new Pessoa(80, 1.75);
console.log("João IMC: " + joao.imc());

const pedro = new Pessoa();
pedro.peso = 100;
pedro.altura = 1.6;
console.log("Pedro IMC: " + pedro.imc());

const maria = new Pessoa();
maria.peso = 67;
maria.altura = 1.65;
console.log("Maria IMC: " + maria.imc());