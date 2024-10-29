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

const atributo = "idade";

//Aqui falamos para o objeto pessoa que queremos o tributo que tem dentro dela.
console.log(pessoa[atributo]);
console.log(pessoa["nome"]);
//Essa notação que fizemos aqui é uma notação de coleção.

//Assim pegamos o nome teste e colocamos no atributo pessoa.
pessoa ["nome"] = "teste"; // Esse método é dinâmico.
//A forma acima é a mesma coisa que fizermos isso: pessoa.nome = "teste";