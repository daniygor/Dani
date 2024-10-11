//Elaborar um programa que adicione números a um vetor. 
//O programa deve impedir a inclusão de números repetidos. 
//Exibir a lista de números a cada inclusão.

let numeros = [];

function adicionarNumero(novoNumero) {
  if (!numeros.includes(novoNumero)) {
    numeros.push(novoNumero);
    console.log('Número adicionado:', novoNumero);
  } else {
    console.log('Número repetido. Não foi adicionado:', novoNumero);
  }
  console.log('Lista atual de números:', numeros);
}

// Exemplo de uso:
adicionarNumero(2);
adicionarNumero(5);
adicionarNumero(2); // Este não será adicionado pois já existe