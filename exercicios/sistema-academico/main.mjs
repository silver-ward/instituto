import Pessoa from "./pessoas/Pessoa.mjs";

const pessoa = new Pessoa();

pessoa.setNome("João");
pessoa.setEmail("joao@example.com");

console.log(pessoa.getNome());
console.log(pessoa.getEmail());