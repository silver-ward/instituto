import Pessoa from './Pessoa.mjs';

export default class PF extends Pessoa{
    #cpf;

    setCPF(cpf){
        if(cpf.length >= 14){
            this.#cpf = cpf;
            return true;
        }
        return false;
    }

    getCPF(){
        return this.#cpf;
    }
}