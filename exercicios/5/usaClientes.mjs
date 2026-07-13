import Pessoa from './pessoas/Pessoa.mjs';
import PF from './pessoas/PF.mjs';
import PJ from './pessoas/PJ.mjs';
import MEI from './pessoas/MEI.mjs';

var check = false;

//#region Pessoa
console.log('\n-----\nCADASTRO DE PESSOA');
const pessoa = new Pessoa();

check = pessoa.setNome('Sofia');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('O nome deve ter no mínimo 3 caracteres.\n');
}
else{
console.log(`\nNome cadastrado: "${pessoa.getNome()}"`);
}

check = pessoa.setEmail('sofia@email.com');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('E-mail vazio.\n');
}
else{
console.log(`\nE-mail cadastrado: "${pessoa.getEmail()}"`);
}

//#endregion


//#region PF
console.log('\n-----\nCADASTRO DE PESSOA FÍSICA: ');
const cidadao = new PF();

check = cidadao.setNome('Alexandre');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('O nome deve ter no mínimo 3 caracteres.\n');
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
console.log(`\nCPF cadastrado: "${cidadao.getCPF()}"`);
}
//#endregion


//#region PJ
console.log('\n-----\nCADASTRO DE PESSOA JURÍDICA');
const empresa = new PJ();

check = empresa.setNome('Empresa');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('O nome deve ter no mínimo 3 caracteres.\n');
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

//#region E-mail e CNPJ inválidos
console.log('\n-----\nTESTES INVÁLIDOS: ');
check = empresa.setEmail('empresa.com');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('Endereço de e-mail inválido.\n');
}
else{
console.log(`\nE-mail cadastrado: "${empresa.getEmail()}"`);
}

check = empresa.setCNPJ('01234567891234');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('CNPJ inválido.\n');
}
else{
console.log(`\nCNPJ cadastrado: "${empresa.getCNPJ()}"`);
}
//#endregion

//#region MEI
console.log('\n-----\nCADASTRO DE MEI');
const autonomo = new MEI();

check = autonomo.setNome('Empresa MEI');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('O nome deve ter no mínimo 3 caracteres.\n');
}
else{
console.log(`\nNome cadastrado: "${autonomo.getNome()}"`);
}

check = autonomo.setEmail('autonomo@email.com.br');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('Endereço de e-mail inválido.\n');
}
else{
console.log(`\nE-mail cadastrado: "${autonomo.getEmail()}"`);
}

check = autonomo.setCNPJ('012345678912345678');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('CNPJ inválido.\n');
}
else{
console.log(`\nCNPJ cadastrado: "${autonomo.getCNPJ()}"`);
}

check = autonomo.setRamoAtividade('Alimentos');

if (!check){
    process.stdout.write("\nErro identificado: ");
    console.log('Ramo de Atividade vazio.\n');
}
else{
console.log(`\nRamo de Atividade cadastrado: "${autonomo.getRamoAtividade()}"`);
}
//#endregion