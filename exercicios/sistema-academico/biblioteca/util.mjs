export default class util {

    validarEmail(email) {
        if(email.includes('@') &&
        (email.endsWith('.com') ||
        email.endsWith(".edu.br"))){
            return true;
        }
        return false;
    }

    validarMatricula(matricula) {
        if(matricula){
            return true;
        }
        return false;
    }

    validarCPF(cpf) {
        if(cpf){
            return true;
        }
        return false;
    }

}