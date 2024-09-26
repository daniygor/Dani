//Dois carros (X e Y) partem em uma mesma direção. O carro X sai com velocidade constante de 60 Km/h e o carro Y sai com velocidade constante de 90 Km/h.
//Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X, ou seja, consegue se afastar um quilômetro a cada 2 minutos.
//Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.

//Entrada
//O arquivo de entrada contém um número inteiro.

//Saída
//Imprima o tempo necessário seguido da mensagem "minutos".


let p1 = lines.shift().split(" ");
let p2 = lines.shift().split(" ");

let x1 = parseFloat(p1.shift());
let y1 = parseFloat(p1.shift());

let x2 = parseFloat(p2.shift());
let y2 = parseFloat(p2.shift());

let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(distancia.toFixed(4));