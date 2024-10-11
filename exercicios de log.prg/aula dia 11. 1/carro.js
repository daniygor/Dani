automove = prompt("digite o tipo de automove que você deseja comprar")

switch(automove) { 
    case"hatch":
    console.log("compra efetuada com sucesso");
    break
    
    case "sedan":
      console.log("tem certeza que não prefere este modelo?")
    case"motocicleta":
    case"caminhonete":
    console.log("tem certeza que não prefere este modelo?")
break
default:
    console.log("não trabalhamos com este tipo de automoveis aqui!")
}

