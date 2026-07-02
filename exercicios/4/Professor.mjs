import { Pessoa } from "./Pessoa.mjs";

class Professor extends Pessoa {
    #disciplina

    setDisciplina(disciplina) {
        if (disciplia) {
            this.#disciplina;
            return true;
        }
        return false;
    }

    getDisciplina() {
        return this.#disciplina;
    }
}