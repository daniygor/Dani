class retangulo {
    constructor(largura, altura){
     this.largura = largura;
     this.altura = altura;

    }
    calcularArea(){
      console.log(`A area do retangulo e: ${this.largura * this.altura}`);
    }
}
let retangulo1 = new retangulo (5 ,10);
retangulo1.calcularArea();