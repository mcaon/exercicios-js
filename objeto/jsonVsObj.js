const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}};

console.log(JSON.stringify(obj)); // JSON é formato de DADOS, dados armazenados em arquivo

// console.log(JSON.parse('{ a: 1, b: 2, c: 3}'))
console.log(JSON.parse('{ "a": 1, "b": 3}')); // formato valido, atributos com aspas DUPLAS
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'));


// ver site JSON5.org
// json validator
