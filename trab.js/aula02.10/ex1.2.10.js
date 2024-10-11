// criando um objeto 'car' com propriedades e metodos
let carro = {
    marca: 'Toyota',
    modelo: 'corolla',
    ano: 2020,
    cor: 'azul',

    //Metodo para exibir informação do carro
    mostrarInformacao: function() {
        console.log(`carro: ${this.marca} ${this.modelo}, ano: ${this.ano}, cor: ${this.cor}`);
    },
    // Metodo para alterar a cor do carro
    pintarCar: function(novaCor) {
        this.color = novaCor;
    }
};
// acessando propriedades
 console.log(carro.marca);
 console.log(carro.modelo);
 console.log(carro.ano);
  // saida: Toyota
 // chamando metodos
 carro.tipoDeCombustivel = "GNV"
 console.log(carro.tipoDeCombustivel);
 carro.mostrarInformacao(); // saida: car: toyota corolla, year: 2020 color: blue