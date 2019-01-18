const imprimirResultadp = function (nota) {
    switch (Math.floor(nota)) {
        case 10: // Assume o valor de baixo (se for 10 ou 9 ele printa console.log
        case 9:
            console.log('Quadro de Honra');
            break; // Sem o BREAK o case abaixo também é executado
        case 8: case 7:
            console.log('Aprovado');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação');
            break;
        case 3: case 2: case 1:
            console.log('Reprovado');
            break;
        default:
            console.log('Nota inválida');
    }
};

imprimirResultadp(10);
imprimirResultadp(8.9);
imprimirResultadp(6.55);
imprimirResultadp(2.33);