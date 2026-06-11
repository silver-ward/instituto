class Pessoa {

    constructor(nome, peso, altura) {
      this.nome = nome;
      this.peso = peso;
      this.altura = altura;
    }
  
    imc() { // índice de massa corpórea
      let imc = this.peso / (this.altura * this.altura);
      return imc;
    }
  
  }
  
  module.exports = Pessoa;