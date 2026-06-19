const Pessoa = require('./Pessoa.js');
const PF = require('./PF.js');

const x = new Pessoa();

let resposta = x.setNome('');
console.log(resposta);

if (resposta) {
  console.log(x.getNome());
} else {
  console.log("Nome vazio");
}

resposta = x.setEmail('vaguetti@gmail.com');

console.log(resposta);

if (resposta) {
  console.log(x.getEmail());
} else {
  console.log("E-mail vazio");
}

console.log('\n========== Seção PF ==========\n');

const y = new PF();

resposta = y.setNome('Pedro');
console.log(resposta);

if(resposta){
  console.log(`Nome: ${y.getNome()}`);
} else {
  console.log('Nome não especificado.');
}

resposta = y.setEmail('');
console.log(resposta);

if (resposta){
  console.log(`Email: ${y.getEmail()}`);
} else {
  console.log('Email não especificado.');
}

resposta = y.setCPF('123456789-10');
console.log(resposta);

if (resposta){
  console.log(`CPF: ${y.getCPF()}`);
}else{
  console.log('CPF não especificado.');
}