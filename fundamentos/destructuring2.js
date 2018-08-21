const [a] = [10]; // Operador de destructuring para ARRAY
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]; // ignora outros elementos e pega somente o segundo elemento do segundo array
console.log(nota);