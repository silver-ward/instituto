//#region Pessoa test
console.log("==========PESSOA TEST==========");
import Pessoa from "./pessoas/Pessoa.mjs";

const pessoaValid1 = new Pessoa();

pessoaValid1.setNome("João");
pessoaValid1.setEmail("joao@example.com");

console.log(pessoaValid1.getNome());
console.log(pessoaValid1.getEmail());

const pessoaInvalid1 = new Pessoa();

pessoaInvalid1.setNome("");
pessoaInvalid1.setEmail("irregular@email");

console.log(pessoaInvalid1.getNome());
console.log(pessoaInvalid1.getEmail());
//#endregion

//#region Aluno test
console.log("==========ALUNO TEST==========");
import Aluno from "./pessoas/Aluno.mjs";

const alunoValid1 = new Aluno();

alunoValid1.setNome("Maria");
alunoValid1.setEmail("maria@example.com");
alunoValid1.setMatricula("12345");

console.log(alunoValid1.getNome());
console.log(alunoValid1.getEmail());
console.log(alunoValid1.getMatricula());

const alunoInvalid1 = new Aluno();
alunoInvalid1.setNome("");
alunoInvalid1.setEmail("irregular.com");
alunoInvalid1.setMatricula("");

console.log(alunoInvalid1.getNome());
console.log(alunoInvalid1.getEmail());
console.log(alunoInvalid1.getMatricula());
//#endregion

//#region Professor test
console.log("==========PROFESSOR TEST==========");
import Professor from "./pessoas/Professor.mjs";
const professorValid1 = new Professor();

professorValid1.setNome("Carlos");
professorValid1.setEmail("carlos@email.edu.br");
professorValid1.setDisciplina("Matemática");

console.log(professorValid1.getNome());
console.log(professorValid1.getEmail());
console.log(professorValid1.getDisciplina());

const professorInvalid1 = new Professor();
professorInvalid1.setNome("");
professorInvalid1.setEmail("professor@email.com");
professorInvalid1.setDisciplina("");

console.log(professorInvalid1.getNome());
console.log(professorInvalid1.getEmail());
console.log(professorInvalid1.getDisciplina());
//#endregion