//Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, 
//meses e dias Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias
//e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses
//e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com 
//objetivo de testar raciocínio matemático simples.



function calcularIdadeEmDias(dias) {
    const anos = Math.floor(dias / 365);
    const meses = Math.floor((dias % 365) / 30);
    const diasRestantes = (dias % 365) % 30;

    return `${anos} ano(s), ${meses} mes(es) e ${diasRestantes} dia(s)`;
}

// Exemplo de uso:
const idadeEmDias = 8000; // Substitua este valor pelo número de dias desejado
const resultado = calcularIdadeEmDias(idadeEmDias);
console.log(resultado); // Saída: 21 ano(s), 11 mes(es) e 15 dia(s)