import PF from './pessoas/PF.mjs';
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

//#region Pessoa
console.log('Cadastro de Pessoa: ');
//#endregion


//#region PF
console.log('Cadastro de Pessoa Física: ');
const cidadao = new PF();

check = cidadao.setNome('Alexandre');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('Nome vazio.\n');
}
else{
console.log(`\nNome cadastrado: "${cidadao.getNome()}"`);
}

check = cidadao.setEmail('alexandre@email.com');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('Endereço de e-mail inválido.\n');
}
else{
console.log(`\nE-mail cadastrado: "${cidadao.getEmail()}"`);
}

check = cidadao.setCPF('01234567891234');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('CPF inválido.\n');
}
else{
console.log(`\nCPF cadastrado: "${cidadao.getCNPJ()}"`);
}
//#endregion


//#region PJ
console.log('Cadastro de Pessoa Jurídica: ');
const empresa = new PJ();

check = empresa.setNome('Empresa');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('Nome vazio.\n');
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
//#endregion