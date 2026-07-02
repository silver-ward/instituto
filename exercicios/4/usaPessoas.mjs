import { Pessoa } from "./Pessoa.mjs";

const p = new Pessoa();

p.setNome('João Silva');
p.setEmail('joao@email.com');

console.log(p.getNome());
console.log(p.getEmail());
