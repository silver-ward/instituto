class Conversor{
    celsiusParaFahrenheit(celsius){
        return ((9/5) * celsius + 32);
    }
}

const celsiusParaFahrenheit = (celsius) =>{
return ((9/5) * celsius + 32);
}

const horasParaMinutos = (horas) => {
    return (horas * 60);
}

const idadeEmDias = (idade) =>{
    return (idade * 365);
}

const kmParaMetros = (km) =>{
    return (km * 1000);
}

const consumoMedio = (distancia, litros) =>{
    return (distancia / litros);
}

module.exports = {
    celsiusParaFahrenheit,
    horasParaMinutos,
    idadeEmDias,
    kmParaMetros,
    consumoMedio
}