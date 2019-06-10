function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123);
const aula2 = new Aula('Até breve', 456);

console.log(aula1, aula2);


// simulando operador new
function novo(f, ...params) { //... => spread rest - SINTAXE DE ESPALHAMENTO
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

const aula3 = novo(Aula, 'Bem vindo', 123);
const aula4 = novo(Aula, 'Ate breve', 456);

console.log(aula3, aula4);





function printaTudo(...params) {
    let soma = 0;
    params.forEach(p => {
        soma += p;
    });
    console.log(soma);
}


printaTudo(1, 2, 3, 123, 222);
