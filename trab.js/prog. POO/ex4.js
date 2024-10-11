function dividir(a, b){
    try{
        if (b === 0){
            throw new Error("divisão por zero nao permitida");
        }
        returna / b;
    }  catch (erro) {
        console.log("Erro: " + erro.message);
    } finally {
        console.log("operação finalizada.");
    }
}
console.log(dividir(10, 2));
console.log(dividir(10, 0));