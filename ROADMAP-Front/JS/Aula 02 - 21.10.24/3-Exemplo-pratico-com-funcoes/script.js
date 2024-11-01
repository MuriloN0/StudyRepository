// Função auxiliar 1
function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2); // O Math.pow fala que é o numero ao quadrado, se colocar 3, ele é ao cubo.
}

//Função auxiliar 2
function classificarImc(imc){
    if (imc < 18.5){
        return `Abaixo do peso`;
    } else if (imc >= 18.5 && imc < 25) {
        return `Peso normal`;
    } else if (imc>= 25 && imc < 30){
        return `Acima do peso`;
    } else if (imc >= 30 && imc <40){
        return `Obeso`;
    } else {
        return `Obesidade Grave`;
    }
}

//Função Main
function main(){
    const peso = 75;
    const altura = 1.75;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main(); // Chamada da função main para rodar o código.
// O que vimos nessa aula é sobre a complexidade quando usamos funções e deixamos estruturado.