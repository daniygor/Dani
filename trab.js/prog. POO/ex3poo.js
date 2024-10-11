//Crie uma classe Endereco que contenha os seguintes atributos:rua: Nome da rua (string).
//numero: Número do endereço (string ou número).Classe Pessoa:Crie uma classe Pessoa que 
//contenha os seguintes atributos:nome: Nome da pessoa (string).endereco: Objeto do tipo
//Endereco que representa o endereço da pessoa.A classe Pessoa deve agregar um objeto 
//Endereco e exibir suas informações utilizando um método chamado exibirInformacoes().
//Método exibirInformacoes():O método exibirInformacoes() deve exibir a seguinte mensagem 
//no console:"Nome: nome, Endereço: rua, número".Exemplo: "Nome: João Silva, Endereço: Rua das 
//Flores, 123".Demonstração:Crie uma instância de Endereco e uma instância de Pessoa.Agregue 
//o endereço à pessoa e chame o método exibirInformacoes() para mostrar os dados.*

class endereco
    rua: "flor do campo";
    numero: 40;
class pessoa
    nome: Andreia;
    endereco: "flor do campo" 40
// adicionar nova propriedade
pessoa.cidade = "Resende";
console.log(pessoa.cidade); //saida: Resende

//modificar propriedade existente

console.log(pessoa.nome);  //saida:nome

//excluir propriedade
delete pessoa.cidade;
console.log(pessoa.cidade); //saida: undefined