//Crie uma classe chamada Carro com os seguintes atributos: marca, modelo e ano. 
//A classe deve ter um método chamado exibirDetalhes que 
//retorne uma string com as informações do carro.

// definição de classe 
class carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirDetalhes(){
        console.log(`marca: ${this.marca}, modelo ${this.modelo} e ano ${this.ano}`)
    }
}

 //teste
    let carro1 = new carro(`volkswagen`);
    