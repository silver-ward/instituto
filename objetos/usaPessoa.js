const Pessoa = require('./pessoa.js');

const joao = new Pessoa("João", 80, 1.75);
console.log(joao.nome + " IMC: " + joao.imc());

const pedro = new Pessoa();
pedro.nome = "Pedro";
pedro.peso = 100;
pedro.altura = 1.6;
console.log(pedro.nome + " IMC: " + pedro.imc());

const maria = new Pessoa();
maria.nome = "Maria";
maria.peso = 67;
maria.altura = 1.65;
console.log(maria.nome + " IMC: " + maria.imc());