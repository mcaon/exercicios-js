const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// CHAVES
console.log(Object.keys(pessoa));

// Valores
console.log(Object.values(pessoa));

// Array de CHAVES + VALOR
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach( e => {
    console.log(`${e[0]}: ${e[1]} `); // Template string
});

Object.entries(pessoa).forEach( ([chave, valor]) => { // operador DESTRUCTURING
    console.log(`${chave}: ${valor} `); // Template string
});


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // enumera na lista de chaves do objeto
    writable: false, // editavel ?
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)


// Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(dest)
