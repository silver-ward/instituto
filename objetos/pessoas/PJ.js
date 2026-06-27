const Pessoa = require("./Pessoa");

class PJ extends Pessoa{
    #cnpj;

    setCNPJ(cnpj){
        if (cnpj) {
            if(cnpj.length >= 18){
                this.#cnpj = cnpj;
                return true
            }
            
            return false;
        }
    }

    getCNPJ(){
        if (this.#cnpj){
            return this.#cnpj;
        }
        return "";
    }

    setEmail(email){
        if (email !== '' && email.includes('@')){
                super.setEmail(email);

                return true;
        }
        return false;
    }
}

module.exports = PJ;