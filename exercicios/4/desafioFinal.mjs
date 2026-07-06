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
    5 - Sair)
    `)
    let choice = await rl.question('Digite sua opção: ');
    switch (choice) {
        case '1':
            console.log('CADASTRO DE PESSOAS');
            //TODO: prompt user to press enter
            // before going back to main menu.
            break;
        case '5':
            console.log('Saindo...');
            menuLoop = false;

    }
}

rl.close();