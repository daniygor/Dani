//definindouma matriz 2x3 (2 linhas e 3 colunas)
let matriz = [
    [1, 2, 3],// primeira linha
    [4, 5, 6] // segunda linha
];

//acessando um elemento especifico
console.log(matriz[0][1]); // saida: 2 (elemento da primeira linha e segunda)

//modificando um elemento especifico
matriz[1][2] = 10;
console.log(matriz[1][2]); // saida 10 (seginda linha, terceira coluna)

// iterando sobre os elementos de uma matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`elemento na posição[${i}][${j}]= ${matriz[i][j]}`);
    }
}