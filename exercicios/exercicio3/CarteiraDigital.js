class CarteiraDigital{
    #titular;
    #saldo = 0;

    definirTitular(nome){
        this.#titular = nome;
    }
    consultarTitular(){
        return this.#titular;
    }
    depositar(valor){
        this.#saldo = this.#saldo + valor;
    }
    sacar(valor){
        if (this.#saldo > valor){
            this.#saldo = this.#saldo - valor;
            return true;
        }
        return false
    }
    consultarSaldo(){
        return this.#saldo;
    }
    exibirInformacoes(){
        return `Titular: ${this.consultarTitular()}\nSaldo: R$${this.consultarSaldo()}`;
    }
}

module.exports = CarteiraDigital;