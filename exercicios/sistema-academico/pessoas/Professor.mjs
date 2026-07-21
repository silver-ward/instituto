import Pessoa from "./Pessoa.mjs";

export default class Professor extends Pessoa {
    #disciplina;

    setEmail(email){
        if(email.endsWith(".edu.br")){
            return super.setEmail(email);
        }
        return false;
    }

    setDisciplina(disciplina) {
        if(disciplina){
            this.#disciplina = disciplina;
            return true;
        }
        return false;
    }
    getDisciplina() {
        return this.#disciplina;
    }
}