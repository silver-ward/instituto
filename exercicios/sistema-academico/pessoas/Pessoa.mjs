import {validarEmail} from "../biblioteca/util.mjs";

export default class Pessoa {
    #nome;
    #email;

    setNome(nome) {
        if(nome){
            this.#nome = nome;
            return true;
        }
        return false;
    }
    getNome() {
        return this.#nome;
    }
    setEmail(email) {
        if(validarEmail(email)){
            this.#email = email;
            return true;
        }
        return false;
    }
    getEmail() {
        return this.#email;
    }
}