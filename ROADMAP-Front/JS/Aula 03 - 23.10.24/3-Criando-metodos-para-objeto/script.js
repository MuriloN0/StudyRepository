// Podemos também utilizar funções nos objetos.
// Essas funções são chamadas de métodos.

const pessoa = {
    nome: "Murilo Novaes",
    idade: 23,
    altura: 1.65,
    descrever: function () {

        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
//Pudemos usar a função/ Método dentro do objeto e pedimos para que ele nos mostrasse o que está dentro da mesma.

pessoa.nome = "Vitor";
pessoa.idade = 58;
// Dados inseridos depois, ele sobrescreve.

pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();

