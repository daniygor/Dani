//Crie uma classe Produto com um construtor que aceite dois ou três parâmetros 
//(nome, preco, categoria). Se categoria não for informado, defina como "Indefinido".

class Produto{
    constructor(nome, preco, categoria){
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
    info(){
        console.log(`produto: ${this.nome} 800: ${this.preco}, eletrodomestico, ${this.categoria}`);
    }
}
construtor(nome, preco, categoria)
console.log(produto.nome); // saida: geladeira
console.log(produto.preco); // saida: 800
console.log(produto.eletrodomestico); // saida: indefinido