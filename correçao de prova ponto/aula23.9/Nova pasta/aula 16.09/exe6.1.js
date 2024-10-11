//função principal 
function caixaDeMercado(){
    let totalGeral = 0;
    let numProdutos = parseInt(prompt("quantos produtos você esta comprando?"));
    let recibo ="";

    // estrutura de repetição para capturar informações de cada produto
    for (let i = 0; i < numProdutos; i++){
        let nomeProduto = prompt(`nome do produto ${i + 1}:`);
        let quantidade = parseInt(prompt(`quantidade de ${ nomeProduto}`));
        let valorUnitario = parseFloat(prompt(`valor unitario de ${nomeProduto}:`));
        
        //calcular o valor total do produto
        let valorTotalProduto = quantidade * valorUnitario;
        totalGeral += valorTotalProduto;

        //adicionaras informações ao recibos
        recibo += `${nomeProduto}: ${quantidade} x R$ ${valorUnitario.toFixed(2)} = R$ ${valorTotalProduto.toFixed(2)}\n`;
    }
    //exibe o recibo e o total geral
    recibo += `\ntotal geral: R$ ${totalGeral.toFixed(2)}`;
    alert(recibo);
}
//chamar a função
caixaDeMercado();
