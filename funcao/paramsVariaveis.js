function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i]; // array interno da funcao com todos argumentos passados
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(3, 5, 2));
console.log(soma(3, 5, 2, "Teste"));