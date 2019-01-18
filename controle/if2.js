function teste1(num) {
    if (num > 7)
        console.log(num); // Sem {} em caso TRUE ele executa a primeira linha
    console.log('Final');
}

teste1(6);
teste1(8);

function teste2(num) {
    if (num > 7); { // Cuidar com p ; (nao usar com estruturas de controle)
        console.log(num);
    }
}

// Ira imprimir os dois pois no formato assima é como se o console.log estivesse
// fora do escopo do if
teste2(6);
teste2(8);