import PJ from './pessoas/PJ.mjs';


/*
Realize os seguintes testes:

Pessoa válida.
Pessoa Física válida.
Pessoa Jurídica válida.
CNPJ inválido.
E-mail inválido.

Exiba mensagens apropriadas
para sucesso ou erro em cada situação.
*/


var check = false;

console.log('Cadastro de Pessoa: ');

console.log('Cadastro de Pessoa Física: ');

console.log('Cadastro de Pessoa Jurídica: ');
const empresa = new PJ();

check = empresa.setNome('Empresa');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('Endereço de e-mail inválido.\n');
}
else{
console.log(`\nNome cadastrado: "${empresa.getNome()}"`);
}

check = empresa.setEmail('empresa@email.com');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('Endereço de e-mail inválido.\n');
}
else{
console.log(`\nE-mail cadastrado: "${empresa.getEmail()}"`);
}

check = empresa.setCNPJ('012345678912345678');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('CNPJ inválido.\n');
}
else{
console.log(`\nCNPJ cadastrado: "${empresa.getCNPJ()}"`);
}
