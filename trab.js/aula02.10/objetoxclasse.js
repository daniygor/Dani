//definição de classe
class Pessoa {
constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
// metodo da classe = ação
apresentar() {
    console.log(`ola, meu nome e ${this.nome} e eu tenho ${this.idade} anos`);

  }
}

// instanciação/criação de objetos a partir da classe
const Pessoa1 = new Pessoa("Daiane", 30); // pessoa1 e objeto
const Pessoa2 = new Pessoa("Bobby Charlton", 18);

// chamar metodo da classe dos objetos
Pessoa1.apresentar();
Pessoa2.apresentar();