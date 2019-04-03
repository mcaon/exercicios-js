// pessoa -> 123 - {...}
// pessoa aponta para endereco de memoria 123, que contem o valor do objeto
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'; // A constante continua em 123, mas o conteudo pode ser alterado
console.log(pessoa);

// pessoa <- 456 -> {...}
//       pessoa = { nome: 'Ana'}; // Tentando alterar valor de pessoa, que é o proprio endereco 123
// esta tentando que pessoa saia de 123 e aponte para 456
// mas é constante, entao isso nao é possivel



// Congelando objeto pessoa
Object.freeze(pessoa);

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
console.log(pessoa.nome)

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'});
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
