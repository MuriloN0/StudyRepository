function meuNome(nome) {
    return ` ${nome} `;
}

meuNome("Murilo");

function verificarIdade(idade){
    if(idade <18){
        console.log(meuNome("Murilo") + "é menor de idade");
    } else {
        console.log(meuNome("Murilo") + "é maior de idade");
    }
}

verificarIdade(23);
//Puxamos uma função dentro da outra.