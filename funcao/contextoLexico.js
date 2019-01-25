const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() // carrega consigo o local onde foi definida a funcao
    // por isso imprime GLOBAL
    // se tivesse console.log(valor) por exemplo, printaria LOCAL
}

exec()