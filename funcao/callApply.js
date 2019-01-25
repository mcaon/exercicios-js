function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4567,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49999, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Diferenca é basicamente os PARAMETROS PASSADOS
console.log(getPreco.call(carro, 0.17, '$')) // espero o escopo CARRO e em seguida os parametros
console.log(getPreco.apply(carro, [0.17, '$'])) // Espera parametros no array