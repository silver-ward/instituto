import { Pessoa } from "./Pessoa.mjs";
import { Aluno } from "./Aluno.mjs";
import Professor from "./Professor.mjs";

console.log('\nTeste 1:');

const p = new Pessoa();

p.setNome('João Silva');
p.setEmail('joao@email.com');

console.log(p.getNome());
console.log(p.getEmail());

console.log('\nTeste 2:');

const p2 = new Pessoa();

if (p.setNome('')) {
    console.log('Nome cadastrado com sucesso.');
}
else {
    console.log('Nome inválido');
}

if (p.setEmail('')) {
    console.log('Email cadastrado com sucesso.');
}
else {
    console.log('Email inválido');
}

console.log('\nTeste 3:');

const a = new Aluno();

a.setNome('Maria');
a.setEmail('maria@email.com');
a.setMatricula('2025001');

console.log(a.getNome());
console.log(a.getEmail());
console.log(a.getMatricula());

console.log('\nTeste 4:');

const b = new Aluno();

if (b.setNome('Pedro')) {
    console.log('Nome cadastrado com sucesso.');
}
else {
    console.log('Nome inválido');
}

if (b.setEmail('')) {
    console.log('Email cadastrado com sucesso.');
}
else {
    console.log('Email inválido');
}

if (b.setMatricula('')) {
    console.log('Matrícula cadastrada com sucesso.');
}
else {
    console.log('Matrícula inválida');
}

console.log('\nTeste 5:');

const prof = new Professor();

prof.setNome('Carlos');
prof.setEmail('carlos@email.com');
prof.setDisciplina('Programação Web');

console.log(prof.getNome());
console.log(prof.getEmail());
console.log(prof.getDisciplina());

console.log('\nTeste 6:');

const c = new Professor();

if (c.setNome('Ana')) {
    console.log('Nome cadastrado com sucesso.');
}
else {
    console.log('Nome inválido');
}

if (c.setEmail('ana@email.com')) {
    console.log('Email cadastrado com sucesso.');
}
else {
    console.log('Email inválido');
}

if (c.setDisciplina('')) {
    console.log('Disciplina cadastrada com sucesso.');
}
else {
    console.log('Disciplina inválida');
}