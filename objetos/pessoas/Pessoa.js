// 01: Arquivo criado em projeto no www.stackblitz.com denominado Pessoa.js
//     Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
//     Objetivo do exemplo: demonstrar conceitos de encapsulamento adicionados de condicionais

class Pessoa {

    #nome;
    #email;
  
    setNome(nome) {
      if (nome) {
        this.#nome = nome;
        return true;
      } else {
        return false;
      }
    }
  
    getNome() {
      return this.#nome;
    }
  
    setEmail(email) {
      if (email) {
        this.#email = email;
        return true;
      } else {
        return false;
      }
    }
  
    getEmail() {
      return this.#email;
    }
  }
  
  module.exports = Pessoa;