function CarroUngido (marca, modelo, ano, cor){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.ligar = function() {
        console.log("o carro esta ligado.");
    };
}

// criando uma nova instancia de carro
let meuCarro = new CarroUngido("volkswagen", "Gol", 2016, "preto");
console.log(meuCarro.marca);
meuCarro.ligar();