class veiculo {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    info(){
        return `Veiculo: ${this.marca} ${this.modelo}`;
    }
}

    classe carro extends veiculo{
        constructor(marca, modelo, portas){
        super(marca, modelo);
        this.portas = portas;
        }
    }
    info(){
        return `${super.info()} | portas: ${this.portas}`
    }
    velocidadeMaxima(){
        return `$velocidade maxima: ${super.velocidadeMaxima()}km/h`
}