//Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
//Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

//Entrada
//O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, 
//representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

//Saída
//Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.



var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nomeVend = parseInt(lines.shift());
let salarioFix = parseFloat(lines.shift());
let totalVend = parseFloat(lines.shift());

let totalFinal = (salarioFix + totalVend * 0.15);

console.log(TOTAL = R$ $ {totalFinal.toFixed(2)});