import dados from 'readline-sync';
/*Ou podemos colocar --------- const entradaDeDados = require('readline-sync')*/
/*const entradaDeDados = require('readline-sync')*/
/*let numero = dados.question("numero: ");
let numero2 = dados.question("numero2: ");

let soma = Number(numero) + Number(numero2);/*Para conver uma string para numero é necessario colocar "Number(variavel)"*/

//console.log(soma);

const data = new Date();/*Para ver a data*/ 
console.log(data);

const dia = data.getDate();/*Para ver o dia*/ 
console.log(dia);

const ano = data.getFullYear();/*Para ver o ano*/ 
console.log(ano);

const mes = data.getMonth()+1;/*Para ver o mes*/
console.log(mes);

const semana = data.getDay()+1;/*Para ver a semana*/ 
console.log(semana);

const hora = data.getHours();/*Para ver a hora*/
console.log(hora);

const minu = data.getMinutes();/*Para ver os minutos*/
console.log(minu);

const dataCompleta = data.toString();
console.log(dataCompleta);

const dataLocal = data.toLocaleDateString();/*Recomendado usar ele*/
console.log(dataLocal);

const miliSegundo = data.getMilliseconds();
console.log(miliSegundo);
