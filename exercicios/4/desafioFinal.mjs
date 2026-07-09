import { Pessoa } from './Pessoa.mjs';
import { Aluno } from './Aluno.mjs';
import Professor from './Professor.mjs';

import readline from 'node:readline/promises';
//import { stdin as input, stdout as output } from 'node:process';
//const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//TODO: add input retry for every attribute if wrong using check =

let pessoas = [];
let alunos = [];
let professores = [];

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
        case '1': {
            console.log('\nCADASTRO DE PESSOAS');
            const pessoa = new Pessoa();
            console.log('\nDigite os seguintes dados da pessoa a ser cadastrada: ');

            let nome = await rl.question('Nome: ');
            let email = await rl.question('Email: ');

            pessoa.setNome(nome);
            pessoa.setEmail(email);

            pessoas.push(pessoa);

            console.log('\nPessoa cadastrada com sucesso.');

            await rl.question('\nPressione enter para voltar ao menu inicial.');
            break;
        }

        case '2': {
            console.log('\nCADASTRO DE ALUNOS');
            const aluno = new Aluno();
            console.log('\nDigite os seguintes dados do aluno a ser cadastrado: ');

            let nome = await rl.question('Nome:\n');
            let email = await rl.question('Email:\n');
            let matricula = await rl.question('Matrícula (mínimo 6 caracteres):\n');

            aluno.setNome(nome);
            aluno.setEmail(email);

            let check = aluno.setMatricula(matricula);
            while (!check) {
                console.log('A matrícula deve conter pelo menos 6 caracteres. Tente novamente.');
                matricula = await rl.question('Matrícula:\n');
                check = aluno.setMatricula(matricula);
            }

            alunos.push(aluno)

            console.log('\nAluno cadastrado com sucesso.');

            await rl.question('\nPressione enter para voltar ao menu inicial.');
            break;
        }

        case '3': {
            console.log('\nCADASTRO DE PROFESSORES');
            const professor = new Professor();
            console.log('\nDigite os seguintes dados do professor a ser cadastrado: ');

            let nome = await rl.question('Nome:\n');
            let email = await rl.question('Email:\n');
            let disciplina = await rl.question('Disciplina:\n');

            professor.setNome(nome);
            professor.setEmail(email);
            professor.setDisciplina(disciplina);

            professores.push(professor);

            console.log('\nProfessor cadastrado com sucesso.');

            await rl.question('\nPressione enter para voltar ao menu inicial.');
            break;
        }

        case '4': {
            console.log('\nLISTAGEM DE DADOS');
            
            console.log('\n========================');
            console.log('PESSOAS CADASTRADAS:');
            pessoas.forEach(p => {
                console.log();
                console.log('----------');
                console.log(`Nome: ${p.getNome()}`);
                console.log(`Email: ${p.getEmail()}`);
                console.log('----------');
            });

            console.log('\n========================');
            console.log('ALUNOS CADASTRADOS:');
            alunos.forEach(a => {
                console.log();
                console.log(`Nome: ${a.getNome()}`);
                console.log(`Email: ${a.getEmail()}`);
                console.log(`Matrícula: ${a.getMatricula()}`);
            });

            console.log('\n========================');
            console.log('PROFESSORES CADASTRADOS:');
            professores.forEach(p =>{
                console.log();
                console.log(`Nome: ${p.getNome()}`);
                console.log(`Email: ${p.getEmail()}`);
                console.log(`Disciplina: ${p.getDisciplina()}`);
            });

            await rl.question('\nPressione enter para voltar ao menu inicial.');
            break;
        }

        case '5':
            console.log('\nSaindo...');
            menuLoop = false;
    }
}

rl.close();