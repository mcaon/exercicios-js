const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao);
    }
};

pessoa.falar();
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // bind passa um objeto para ser resolvido o THIS
falarDePessoa() // como se "amarrasse" a pessoa passada ao falarDePessoa