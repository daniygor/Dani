var numero1 = parseInt(prompt("informe o primeiro numero"))
var numero2 = parseInt(prompt("informe o segundo numero"))
var numero3 = parseInt(prompt("informe o terceiro numero"))

if (numero1> numero2 && numero1 > numero3){
    console.log("Maior numero: " + numero1)
    }
    else if (numero2> numero3){
        console.log("Maior numero: " + numero2)
    }
    else{
        console.log("Maior numero: " + numero3)
    }