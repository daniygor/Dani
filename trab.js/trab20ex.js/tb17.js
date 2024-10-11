//Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas)
//no qual o valor pode ser decomposto. As notas consideradas são
//de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.


function calcularNotas(valor) {
    const notas = [100, 50, 20, 10, 5, 2, 1];
    let resultado = `Valor lido: ${valor}\n`;

    for (let nota of notas) {
        let quantidadeNotas = Math.floor(valor / nota);
        valor %= nota;
        resultado += `${quantidadeNotas} nota(s) de R$ ${nota},00\n`;
    }

    return resultado;
}

// Exemplo de uso
const valor = 576; // Você pode alterar este valor para testar com outros números
console.log(calcularNotas(valor));

























