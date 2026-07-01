const PF = require('./PF');

class Aluno extends PF {
    #matricula;
    #curso;

    setMatricula(matricula) {
        if (matricula) {
            if ((matricula.length === 8) &&
                (matricula.startsWith("20"))) {
                this.#matricula = matricula;
                return true;
            }
            return false;
        }
        return false;
    }

    getMatricula(){
        return this.#matricula;
    }
}

module.exports = Aluno;