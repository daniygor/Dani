



function verificarValores(A, B, C, D) {
    if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 === 0) {
        console.log("Valores aceitos");
    } else {
        console.log("Valores nao aceitos");
    }
}

// Exemplo de uso:
verificarValores(2, 3, 2, 6); // Valores aceitos
verificarValores(5, 3, 2, 6); // Valores nao aceitos
























