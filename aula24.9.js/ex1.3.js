//let numeros = [5, 12, 8, 130, 44];
//let maiorNumero = Math.max(...numeros)

//console.log(`o maior numero e: ${maiorNumero}`)

let numeros = [5, 12, 8, 130, 44];
let maiorNumero = numeros[0];

for (let i=1; i< numeros.length; i++){
    if (numeros[i]> maiorNumero){
        maiorNumero = numeros[i];
    }
}
console.log(maiorNumero);
