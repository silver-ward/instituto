import PJ from './PJ.mjs'

export default class MEI extends PJ {
    #ramoAtividade

    setEmail(email){
        if(email.endsWith(".com.br")){
            return super.setEmail(email);
        }
        return false;
    }
    
    setRamoAtividade(ramoAtividade){
        if (ramoAtividade){
            this.#ramoAtividade = ramoAtividade;
            return true;
        }
        return false;
    }
    
    getRamoAtividade(){
        return this.#ramoAtividade;
    }
}