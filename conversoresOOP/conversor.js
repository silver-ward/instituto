class Conversor{
    celsiusParaFahrenheit(celsius){
        return ((9/5) * celsius + 32);
    }

    kmParaMilhas(km){
        return (km * 0.621371);
    }
}

module.exports = Conversor;