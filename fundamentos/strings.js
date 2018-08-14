const escola = 'Cod3r';

console.log(escola.charAt(4)); // Letra no indice 4 na String
console.log(escola.charAt(5)); // Nao imprime ERRO
console.log(escola.charCodeAt(5)); // Imprime valor UNICODE
console.log(escola.indexOf(`3`)); // Posicao do literal 3 na palavra escola

console.log(escola.substring(1)); // A partir do indice 1 ate o final
console.log(escola.substring(0, 3)); // Imprime do indice 0 ate o anterior ao 3

console.log(`Escola `.concat(escola).concat(`!!`)) // Concatena strings
console.log(escola.replace(3, `e`)); // substitui o(s) primeiro(s) pelo segundo
console.log(escola.replace(/\d/, `e`)); // RegEX

console.log(`ana, maria, pedro`.split(`,`)); // Gera um ARRAY com 3 elementos usando o `,` como separador