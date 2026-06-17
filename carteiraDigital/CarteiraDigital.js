class CarteiraDigital{
    #titular;
    #saldo;

    definirTitular(nome){
        this.#titular = nome;
    }
    consultarTitular(){
        return this.#titular;
    }
    depositar(valor){
        return null;
    }
    sacar(valor){
        return null;
    }
    consultarSaldo(){
        return null;
    }
    exibirInformacoes(){
        return null;
    }
}

module.exports = CarteiraDigital;