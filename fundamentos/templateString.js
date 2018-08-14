const nome = `Rebeca`;

const concatenacao = `Ola ` + nome + ` !!`;

const template = `
    Ola
    ${nome}!`; // Inicia-se com ` (crase e nao aspas simples)

console.log(concatenacao, template);

// Expressoes
console.log(`1 + 1 = ${1 + 1}`);

// Funcao ARROW =>
const up = texto => texto.toUpperCase();
console.log(`ei .. ${up(`cuidado`)}`);