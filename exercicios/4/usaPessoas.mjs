import { Pessoa } from "./Pessoa.mjs";
import { Aluno } from "./Aluno.mjs";
import Professor from "./Professor.mjs";
import Coordenador from "./Coordenador.mjs";

//#region Teste 1
console.log('\nTeste 1:');

const p = new Pessoa();

p.setNome('João Silva');
p.setEmail('joao@email.com');

console.log(p.getNome());
console.log(p.getEmail());
//#endregion

//#region Teste 2
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
//#endregion

//#region Teste 3
console.log('\nTeste 3:');

const a = new Aluno();

a.setNome('Maria');
a.setEmail('maria@email.com');
a.setMatricula('2025001');

console.log(a.getNome());
console.log(a.getEmail());
console.log(a.getMatricula());
//#endregion

//#region Teste 4
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
//#endregion

//#region Teste 5
console.log('\nTeste 5:');

const prof = new Professor();

prof.setNome('Carlos');
prof.setEmail('carlos@email.com');
prof.setDisciplina('Programação Web');

console.log(prof.getNome());
console.log(prof.getEmail());
console.log(prof.getDisciplina());
//#endregion

//#region Teste 6
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
//#endregion

//#region Desafio Extra 1
console.log('\nDesafio Extra 1:');

const d = new Pessoa();

if (d.setEmail('aluno@email.com')){
    console.log('Email cadastrado com sucesso.');
}
else {
    console.log('Email inválido');
}

const e = new Pessoa();

if (e.setEmail('professor@escola.com')){
    console.log('Email cadastrado com sucesso.');
}
else {
    console.log('Email inválido');
}

const f = new Pessoa();

if (f.setEmail('alunoemail.com')){
    console.log('Email cadastrado com sucesso.');
}
else {
    console.log('Email inválido');
}

const g = new Pessoa();

if (g.setEmail('professor.com')){
    console.log('Email cadastrado com sucesso.');
}
else {
    console.log('Email inválido');
}
//#endregion

//#region Desafio Extra 2
console.log('\nDesafio Extra 2:')

const h = new Aluno();

if (h.setMatricula('123456')){
    console.log('Matrícula cadastrada com sucesso.');
}
else {
    console.log('Matrícula inválida');
}

const i = new Aluno();

if (i.setMatricula('12345')){
    console.log('Matrícula cadastrada com sucesso.');
}
else {
    console.log('Matrícula inválida');
}
//#endregion

//#region Desafio Avançado
console.log('\nDesafio Avançado:')

const j = new Coordenador();

j.setSetor('Setor de Testes');
console.log(j.getSetor());
//#endregion