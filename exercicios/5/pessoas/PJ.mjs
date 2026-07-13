import Pessoa from './Pessoa.mjs';

export default class PJ extends Pessoa{
    #cnpj;

    setEmail(email){
        if (email.includes('@') && email.endsWith(".com")){
            return super.setEmail(email);
        }
        return false;
    }

    setCNPJ(cnpj){
        if(cnpj.length >= 18){
            this.#cnpj = cnpj;
            return true;
        }
        return false;
    }

    getCNPJ(){
        return this.#cnpj;
    }
}