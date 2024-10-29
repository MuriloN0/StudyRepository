function SayMyName(name) //Esses parenteses são os parametros da função.
{
    console.log(`Your name is ${name}`);
}

SayMyName('Murilo'); //Aqui chamamos a função.
//com esses parametros, podemos definir um ao chaamrmos ela.

function quadrado(valor){
    return valor * valor;
}

const quadradoResult = quadrado(10);
console.log(quadradoResult);
//nesse exempl0 usamos o return para retornar o valor e atribuimos a função a uma constante.

function incrementarJuros(valor, percentualJuros){
    const valorAcrecimo =  (percentualJuros/100) * valor;
    return valor + valorAcrecimo;
}
const valorComJuros = incrementarJuros(100, 10);
console.log(valorComJuros);