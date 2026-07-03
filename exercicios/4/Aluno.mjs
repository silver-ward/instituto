import { Pessoa } from "./Pessoa.mjs";
export { Aluno };

class Aluno extends Pessoa {
    #matricula;

    setMatricula(matricula) {
        if (matricula) {
            #this.matricula = matricula;
            return true;
        }
        return false;
    }

    getMatricula() {
        return this.#matricula;
    }
}