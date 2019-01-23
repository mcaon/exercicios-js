const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
    if (x == 5) {
        break; // Age mais proximo do tipo FOR, WHILE ou SWITCH... NAO AGE NO IF
    }
    console.log(`x = ${nums[x]}`);
}

for (y in nums) {
    if (y == 5) continue; // Interrompe quando y = 5 e vai pra proxima repeticao
    console.log(`${y} = ${nums[y]}`)
}

// ROTULO externo
externo:
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo; // para interromper o laco mais externo COM O ROTULO externo
            console.log(`Par = ${a}, ${b}`);

    }
}


// tanto BREAK quanto CONTINUE interrompem o fluxo
// BREAK => quebra o laco corrente
// CONTINUE => segue para proxima iteracao do laco corrente