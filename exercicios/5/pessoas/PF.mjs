import Pessoa from './Pessoa.mjs';

export default class PF extends Pessoa{
    #cpf;

    setCPF(cpf){
        return false;
    }

    getCPF(){
        return this.#cpf;
    }
}