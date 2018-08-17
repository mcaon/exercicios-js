// par chave/valor
const saudacao = 'opa'; // contexto lexico 1(local fisico que foi definido)

function exec() {
    const saudacao = 'Falaaa'; // Contexto lexico 2
    return saudacao;
}

console.log(saudacao);

// Objetos sao grupos aninhados de chave/valor
const cliente = {
    nome: 'Alice',
    idade: 26,
    endereco: {
        rua: 'Laje de Pedra',
        numero: 171,
        casa: 7
    }

}

console.log(saudacao);
console.log(exec());
console.log(cliente);