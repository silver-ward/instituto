import { logGetters } from "./biblioteca/util.mjs";

//#region Pessoa test
console.log("\n==========PESSOA TEST==========\n");
import Pessoa from "./pessoas/Pessoa.mjs";

const pessoaValid1 = new Pessoa();

pessoaValid1.setNome("João");
pessoaValid1.setEmail("joao@example.com");

console.log('Dados válidos de Pessoa:');
logGetters(pessoaValid1);

console.log('-----');

const pessoaInvalid1 = new Pessoa();

pessoaInvalid1.setNome("");
pessoaInvalid1.setEmail("irregular@email");

console.log('Dados inválidos de Pessoa:');
logGetters(pessoaInvalid1);

//#endregion

//#region Aluno test
console.log("\n==========ALUNO TEST==========\n");
import Aluno from "./pessoas/Aluno.mjs";

const alunoValid1 = new Aluno();

alunoValid1.setNome("Maria");
alunoValid1.setEmail("maria@example.com");
alunoValid1.setMatricula("12345");

console.log('Dados válidos de Aluno:');
logGetters(alunoValid1);

console.log('-----');

const alunoInvalid1 = new Aluno();
alunoInvalid1.setNome("");
alunoInvalid1.setEmail("irregular.com");
alunoInvalid1.setMatricula("");

console.log('Dados inválidos de Aluno:');
logGetters(alunoInvalid1);
//#endregion

//#region Professor test
console.log("\n==========PROFESSOR TEST==========");
import Professor from "./pessoas/Professor.mjs";
const professorValid1 = new Professor();

professorValid1.setNome("Carlos");
professorValid1.setEmail("carlos@email.edu.br");
professorValid1.setDisciplina("Matemática");

console.log('Dados válidos de Professor:');
logGetters(professorValid1);

console.log('-----');

const professorInvalid1 = new Professor();
professorInvalid1.setNome("");
professorInvalid1.setEmail("professor@email.com");
professorInvalid1.setDisciplina("");

console.log('Dados inválidos de Professor:');
logGetters(professorInvalid1);
//#endregion