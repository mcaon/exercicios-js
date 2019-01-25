function Pessoa(nome) {
    this.nome = nome // Poderia usar diretamente o nome, mas ficaria SEM ACESSO a variavel

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Teste')
p1.falar()