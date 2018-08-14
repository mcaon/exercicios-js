// Arrays emm js sao heterogeneos

const valores = [7.7, 8.8, 9.3, 6.2];
console.log(valores);
console.log(valores[0], valores[2]);
console.log(valores[4]); // Nao da ERRO ao ler um elemento que nao esta no array

valores[4] = 10
console.log(valores);

valores[10] = 10
console.log(valores); // Imprime valores vazios intermediarios!!!

console.log(valores.length); // Tamanho do array

valores.push(2.2, false, null); // Array aceita qualquer tipo de objeto FRACAMENTE TIPADO
console.log(valores);

console.log(valores.pop()); // Retira ultimo valor do array
console.log(valores);

delete valores[0]; // Apaga o elemento na posicao 0 ZERO
console.log(valores);

console.log(typeof valores); // Mostra que array e um objeto