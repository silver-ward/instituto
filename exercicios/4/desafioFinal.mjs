import { Pessoa } from './Pessoa.mjs';

import readline from 'node:readline/promises';
//import { stdin as input, stdout as output } from 'node:process';
//const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let menuLoop = true;
while (menuLoop) {
    console.log('SISTEMA ESCOLAR')
    console.log(`
    1 - Cadastrar Pessoa
    2 - Cadastrar Aluno
    3 - Cadastrar Professor
    4 - Listar Dados
    5 - Sair
    `)
    let escolha = await rl.question('Digite sua opção: ');
    switch (escolha) {
        case '1':
            console.log('\nCADASTRO DE PESSOAS');
            const pessoa = new Pessoa();
            console.log('\nDigite os seguintes dados da pessoa a ser cadastrada: ');
            
            let nome = await rl.question('Nome: ');
            let email = await rl.question('Email: ');
            
            pessoa.setNome(nome);
            pessoa.setEmail(email);

            console.log('\nPessoa cadastrada com sucesso:');
            console.log(`Nome: ${pessoa.getNome()}`);
            console.log(`Email: ${pessoa.getEmail()}`);

            await rl.question('\nPressione enter para voltar ao menu inicial.');
            break;
        case '5':
            console.log('Saindo...');
            menuLoop = false;
    }
}

rl.close();