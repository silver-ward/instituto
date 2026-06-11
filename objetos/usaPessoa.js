// Arquivo criado em projeto no www.stackblitz.com denominado usaPessoa.js
// Para executar utilize: node ./objetos/usaPessoa.js

const Pessoa = require('./pessoa.js');

const joao = new Pessoa(80, 1.75);
console.log(joao.imc());

const pedro = new Pessoa();
pedro.peso = 100;
pedro.altura = 1.6;
console.log(pedro.imc());

const maria = new Pessoa();
maria.peso = 67;
maria.altura = 1.65;
console.log("Maria IMC: " + maria.imc());