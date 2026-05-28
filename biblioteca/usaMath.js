const operacao = require('./math.js');

{
    let a = 10;
    let b = 2;

    console.log(operacao.somar(a, b));
    console.log(operacao.subtrair(a, b));
    console.log(operacao.dividir(a, b));
    console.log(operacao.multiplicar(a, b));
}