// Funcao sem RETORNO
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

imprimirSoma(2); // resunta em um NaN (Not a Number)

// Funcao com RETORNO

function soma(a, b = 0) { // Ja inidica valor inicial para variavel b
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));