class Pessoa {
    nome;
    idade;

    descrever (){
        console.log(`Meu nome é ${this.nome} e minha idade pe ${this.idade}`);
    }
}

const vitor = new Pessoa();
vitor.nome = "Vitor Oliveira";
vitor.idade = 58;

const murilo = new Pessoa();
murilo.nome = "Murilo Oliveira";
murilo.idade = 23;

vitor.descrever();
murilo.descrever();

console.log(vitor);
console.log(murilo)