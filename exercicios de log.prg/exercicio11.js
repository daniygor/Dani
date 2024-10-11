var salario = parseInt(prompt("informe o salario"))

if(salario <= 500){
    salario = salario * 1.15
 console.log(salario)
}
else if ( salario > 500 && salario <= 1000){
    salario = salario * 1.125
  console.log(salario)  
}
else{
    salario = salario * 1.1
    console.log(salario)
} 