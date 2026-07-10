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


let pessoas = [];
let alunos = [];
let professores = [];

//TODO: add input retry for every attribute if wrong using check =
var check;

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
            console.log('\nDigite os seguintes dados da pessoa a ser cadastrada: \n');

            let nome;
            check = false;
            while(!check){
                nome = await rl.question('Nome: \n');
                check = pessoa.setNome(nome);
                if (!check){
                    process.stdout.write("\nErro identificado: ");
                    console.log('Nome vazio.\n');
                    console.log('Tente novamente.');
                }
            }
            
            let email;
            check = false;
            while(!check){
                email = await rl.question('Email: \n');
                check = pessoa.setEmail(email);
                if (!check){
                    process.stdout.write("\nErro identificado: ");
                    console.log('Endereço de e-mail inválido.\n');
                    console.log('Tente novamente.');
                }
            }

            pessoas.push(pessoa);

            console.log('\nPessoa cadastrada com sucesso.');

            await rl.question('\nPressione enter para voltar ao menu inicial.');
            break;
        }

        case '2': {
            console.log('\nCADASTRO DE ALUNOS');
            const aluno = new Aluno();
            console.log('\nDigite os seguintes dados do aluno a ser cadastrado: \n');

            let nome;
            check = false;
            while(!check){
                nome = await rl.question('Nome: \n');
                check = aluno.setNome(nome);
                if (!check){
                    process.stdout.write("\nErro identificado: ");
                    console.log('Nome vazio.\n');
                    console.log('Tente novamente.');
                }
            }
            
            let email;
            check = false;
            while(!check){
                email = await rl.question('Email: \n');
                check = aluno.setEmail(email);
                if (!check){
                    process.stdout.write("\nErro identificado: ");
                    console.log('Endereço de e-mail inválido.\n');
                    console.log('Tente novamente.');
                }
            }

            let matricula;
            check = false;
            while(!check){
                matricula = await rl.question('Matrícula (mínimo 6 caracteres):\n');
                check = aluno.setMatricula(matricula);
                if (!check){
                    process.stdout.write("\nErro identificado: ");
                    console.log('A matrícula deve ter ao menos 6 caracteres.\n');
                    console.log('Tente novamente.');
                }
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

            let nome;
            check = false;
            while(!check){
                nome = await rl.question('Nome: \n');
                check = professor.setNome(nome);
                if (!check){
                    process.stdout.write("\nErro identificado: ");
                    console.log('Nome vazio.\n');
                    console.log('Tente novamente.');
                }
            }
            
            let email;
            check = false;
            while(!check){
                email = await rl.question('Email: \n');
                check = professor.setEmail(email);
                if (!check){
                    process.stdout.write("\nErro identificado: ");
                    console.log('Endereço de e-mail inválido.\n');
                    console.log('Tente novamente.');
                }
            }

            let disciplina;
            check = false;
            while(!check){
                disciplina = await rl.question('Disciplina: \n');
                check = professor.setDisciplina(disciplina);
                if (!check){
                    process.stdout.write("\nErro identificado: ");
                    console.log('Disciplina vazia.\n');
                    console.log('Tente novamente.');
                }
            }

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