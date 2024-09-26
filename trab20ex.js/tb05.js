//Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2,
//o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

//Entrada
//O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

//Saída
//A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$".
//O valor deverá ser apresentado com 2 casas após o ponto.




let Peca_1 = lines.shift().split(" ");
let Peca_2 = lines.shift().split(" ");

let numPeca_1 = parseInt(Peca_1.shift());
let qtdPeca_1 = parseInt(Peca_1.shift());
let precoPeca_1 = parseFloat(Peca_1.shift());

let numPeca_2 = parseInt(Peca_2.shift());
let qtdPeca_2 = parseInt(Peca_2.shift());
let precoPeca_2 = parseFloat(Peca_2.shift());

let valor = (qtdPeca_1 * precoPeca_1) + (qtdPeca_2 * precoPeca_2);

console.log("valor a pagar": R$ ${valor.toFixed(2)}); 