const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...2',
    preco: 1245
}

// Factory simples
// Funcao que retorna um objeto = FACTORY
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());