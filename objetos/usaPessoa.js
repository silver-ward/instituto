const Pessoa = require('./pessoa.js');

const joao = new Pessoa("João", 80, 1.75);
console.log(`----------\nNome: ${joao.nome}\nIMC: ${joao.imc().toFixed(2)}\n----------`);

const pedro = new Pessoa();
pedro.nome = "Pedro";
pedro.peso = 100;
pedro.altura = 1.6;
console.log(`Nome: ${pedro.nome}\nIMC: ${pedro.imc().toFixed(2)}\n----------`);

const maria = new Pessoa();
maria.nome = "Maria";
maria.peso = 67;
maria.altura = 1.65;
console.log(`Nome: ${maria.nome}\nIMC: ${maria.imc().toFixed(2)}\n----------`);