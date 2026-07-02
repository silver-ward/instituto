import { Pessoa } from "./Pessoa.mjs";

console.log('\nTeste 1:')

const p = new Pessoa();

p.setNome('João Silva');
p.setEmail('joao@email.com');

console.log(p.getNome());
console.log(p.getEmail());

console.log('\nTeste 2:')

const p2 = new Pessoa();

if (p.setNome('')) {
    console.log('Operação realizada com sucesso.');
}
else {
    console.log('Nome inválido');
}

if (p.setEmail('')) {
    console.log('Operação realizada com sucesso.');
}
else {
    console.log('Email inválido');
}


