const Pessoa = require('./Pessoa.js');
const PF = require('./PF.js');
const PJ = require('./PJ.js');

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
  console.log('Nome inválido.');
}

resposta = y.setEmail('');
console.log(resposta);

if (resposta){
  console.log(`Email: ${y.getEmail()}`);
} else {
  console.log('Email inválido.');
}

resposta = y.setCPF('123456789-10');
console.log(resposta);

if (resposta){
  console.log(`CPF: ${y.getCPF()}`);
}else{
  console.log('CPF inválido.');
}

console.log('\n========== Seção PJ ==========\n');

const z = new PJ();

resposta = z.setNome("Frios LTDA");
console.log(resposta);
if (resposta){
  console.log(`Nome: ${z.getNome()}`);
}
else{
  console.log('Nome inválido.');
}

resposta = z.setEmail("frios@email.com");
console.log(resposta);
if(resposta){
  console.log(`E-mail: ${z.getEmail()}`);
}
else{
  console.log('E-mail inválido.');
}

resposta = z.setCNPJ('');
console.log(resposta);
if(resposta){
  console.log(`CNPJ: ${z.getCNPJ()}`);
}
else{
  console.log('CNPJ inválido.');
}