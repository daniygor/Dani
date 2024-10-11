//Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, 
//deve ser apresentado como resposta o mês do ano por extenso,
//em inglês, com a primeira letra maiúscula.



function getMonthName() {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    return months[randomNumber - 1];
}

console.log(getMonthName());