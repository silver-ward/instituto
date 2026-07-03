import Professor from "./Professor.mjs"

export default class Coordenador extends Professor{
    #setor;

    setSetor(setor){
        if (setor){
            this.#setor = setor;
            return this.#setor;
        }
        return false;
    }

    getSetor(){
        return this.#setor;
    }
}