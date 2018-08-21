// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Serv Laje de Pedra',
        numero: 171
    }
};

const {nome , idade} = pessoa; // OPERADOR DESTRUCTURING para OBJETO
console.log(nome, idade);

const {nome: n , idade: i} = pessoa; // OPERADOR DESTRUCTURING atribuindo um nome as variaveis extraidas
console.log(n, i);

const {sobrenome , bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const {endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);