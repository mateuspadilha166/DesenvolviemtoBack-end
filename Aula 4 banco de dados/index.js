import readline from "readline-sync";
import mysql from 'mysql2';
// import --Nome da depedencia -- from -- chamar a dependencia

const insert = "INSERT INTO pessoa(nome, sobrenome) VALUES(?,?)";// chyamada para colocar os valores do nome

const list = "select * from pessoa";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root99',
    database: 'cad'
})// chamada da funcção MYSQL e precisa dos 4 parametros funcionar que faz a conecção do banco de dados

connection.connect(function(err){
    if(err){
        console.error('Erro', err);
        return;
    }console.log("Conexão OK!");
})// o Conecction veio da const, e tem o metodo conect que faz se a conexao foi feeita atravez do err se ele for verdadeiro atrasvez de uma função

    let nome = readline.question("Qual seu nome: ");
    let sobrenome = readline.question("Qual seu sobrenome: ");
    inserirUser(nome, sobrenome);
//Usado para chamar para o usuario escrever seu nome
function inserirUser(nome, sobrenome){
    connection.query(insert,[nome,sobrenome], function(err, results){
        if(err){
            console.error("Erro ao inserir dados", err);
            return
        }
    });// uma função para receber nossos dados se funcinar ele retorna o insert se der erro ele me mostra o erro
    console.log(`Usuario: ${nome} ${sobrenome} inserido com sucesso`);
}

listarUser();

function listarUser(){
    connection.query(list, function(err, results){
        if(err){
            console.error("Erro ao listar Users", err);
            return;
        }
        if(results.length === 0){
            console.log("Nenhum usuario encontrado");
            return;
        }console.log("lista de usuarios")
        for(const usuario of results){// criamos uma nova const usuario para armazenar o que tem no result e apresneta, 
            console.log(`Nome: ${usuario.nome} ${usuario.sobrenome}`)
        }
    })
}