function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;
// O Bloco é executado PELO MENOS UMA VEZ
// diferentemente do WHILE
do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opcao escolhida foi ${opcao}`);
} while (opcao != -1);