//Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, 
//sabendo que o mesmo pode começar em um dia e terminar em outro, 
//tendo uma duração mínima de 1 hora e máxima de 24 horas.




function calcularDuracaoJogo(horaInicial, horaFinal) {
    // Verifica se o jogo começou e terminou no mesmo dia
    if (horaInicial < horaFinal) {
        return horaFinal - horaInicial;
    } else {
        // Caso o jogo tenha terminado no dia seguinte
        return (24 - horaInicial) + horaFinal;
    }
}

// Exemplo de uso
let horaInicial = 22; // 22:00
let horaFinal = 2; // 02:00 do dia seguinte
let duracao = calcularDuracaoJogo(horaInicial, horaFinal);

console.log(`A duração do jogo foi de ${duracao} horas.`);
























