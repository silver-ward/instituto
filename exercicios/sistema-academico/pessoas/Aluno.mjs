import Pessoa from "./Pessoa.mjs";
import util from "../biblioteca/util.mjs";

const Util = new util();

export default class Aluno extends Pessoa {
    #matricula;

    setMatricula(matricula) {
        if(Util.validarMatricula(matricula)){
            this.#matricula = matricula;
            return true;
        }
        return false;
    }
    getMatricula() {
        return this.#matricula;
    }
}