//criando um objeto 'caminhão'
let caminhão = {
    marca:"volkswagen",  //propriedade: chave e 'marca', valor e "volkswagen"
    modelo: "constellation",  // propriedade: chave e 'modelo', valor e "constellation"
    ano:2024,               // propriedade: chave e 'ano', valor e 2024
    cor: "prata",      
    cabine:[
        { tipo: 'simples', capacidade: 2, teto: 'fechado' },
        { tipo: 'dupla', capacidade: 5 },
    ], 
    
    ligar: function(){
        console.log( 'o caminhão esta ligado.');
    },
    
    desligar: function(){
        console.log(' o caminhão esta desligado.');

    }
}
console.log(caminhão.cabine[0].teto);
console.log(caminhão["ano"], caminhão["marca"]);

caminhão.ligar();