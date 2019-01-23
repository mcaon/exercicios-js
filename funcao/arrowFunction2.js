function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++; // o this fica no escopo local fixo, independe de quem chama a funcao
        console.log(this.idade);
    }, 1000)
}

new Pessoa()