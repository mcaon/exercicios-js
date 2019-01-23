function Pessoa() {
    this.idade = 0;

    const self = this; // this se torna a instancia atual do codigo,
                            // neste caso o new Pessoa da linha 14
                            // assim poderia chamar o self no lugar do this na linha 8
    setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }/*.bind(this)*/, 1000); // Com o bind ele faz a funcao apontar para THIS
}

// com o bind ele roda certo, sem printar NaN
new Pessoa