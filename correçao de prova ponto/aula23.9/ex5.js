var numero = [2,4,6,7,8,11,13,14,20,22];
for(var i = 0; i<numero.length; i++ ){
    if (numero[i]%2==0){
        console.log(numero[i])
    }
}
//forma 2
let pares = numeros.filter(function(numero){
    return numero% 2 ==0;
})
console.log(`numero pares: ${pares}`)
 