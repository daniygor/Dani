let carro = {
    fabricante: 'volkswagen',
    modelo: 'Gol',
    ano: 2018,
    cor: 'vermelho',
    quilomentragem: 0,
    
    // metodo para dirigir o carro e aumentar a quilometragem
    dirigir: function(distancia){
        this.quilometragem += distancia;
    },

    // metodo para exebir as informacoes do carro
    exibirInformacoes: function() {
        console.log(`carro: ${this.fabricante} ${this.modelo}, ano: ${this.ano}, ${this.cor}, quilometragem: ${this.quilomentragem} km`);
    },
    //metodo para alterar a cor do carro
    pintarCarro: function(novaCor) {
        this.cor = novaCor;
    }
};
//testando o objeto 'carro'
carro.dirigir(50); // aumenta a quilometragem em 50 km
carro.exibirInformacoes(); //exebir: carro: volkswagen gol, Ano: 2018, cor: Azul, quilometragem: 50 km

carro.pintarCar('azul'); // muda a cor do carro para azul
carro.exibirInformacoes(); // exibe: carro: volkswagen gol, ano: 2018, cor: azul, quilometragem:50 km