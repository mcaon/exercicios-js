const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

pilotos.pop(); // Massa quebrou o carro! -> Remove o ULTIMO ELEMENTO
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);


pilotos.shift(); // Remove elemento da PRIMEIRA POSICAO
console.log(pilotos);

pilotos.unshift('Hamilton'); // Adiciona elemento na PRIMEIRA POSICAO
console.log(pilotos);


pilotos.splice(2, 0, 'Bottas', 'Massa'); // Nao exclui ninguem, adiciona 2 pilotos na posicao 2
console.log(pilotos);

// REMOVER
pilotos.splice(3, 1); // Remove na posicao 3 (um elemento)
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); // Gera novo array a partir do indice 2
console.log(algunsPilotos);


const algunsPilotos1 = pilotos.slice(1, 4); // Gera novo array a partir do indice 1 ate o 4 (o 4 nao entra)
console.log(algunsPilotos1);
