//#region Pessoa test
import Pessoa from "./pessoas/Pessoa.mjs";
const pessoa = new Pessoa();

pessoa.setNome("João");
pessoa.setEmail("joao@example.com");

console.log(pessoa.getNome());
console.log(pessoa.getEmail());
//#endregion

//#region Aluno test
import Aluno from "./pessoas/Aluno.mjs";
const aluno = new Aluno();

aluno.setNome("Maria");
aluno.setEmail("maria@example.com");
aluno.setMatricula("12345");

console.log(aluno.getNome());
console.log(aluno.getEmail());
console.log(aluno.getMatricula());
//#endregion