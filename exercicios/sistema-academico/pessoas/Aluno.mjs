import Pessoa from "./Pessoa.mjs";
import { validarMatricula } from "../biblioteca/util.mjs";

export default class Aluno extends Pessoa {
    #matricula;

    setMatricula(matricula) {
        if (validarMatricula(matricula)) {
            this.#matricula = matricula;
            return true;
        }
        return false;
    }
    getMatricula() {
        return this.#matricula;
    }
}