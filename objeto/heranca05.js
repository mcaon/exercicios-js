console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split('').reverse().join(''); // SPLIT depois inverte tudo e depois junta novamente na Strin
};

console.log('Marcello Caon'.reverse());

Array.prototype.first = function() {
    return this[0]; // THIS acessa o objeto no contexto da funcao/objeto
}

console.log([1, 2, 3, 4, 5].first());

// CATASTROFE - Substituindo funcao padrao toString() que é usada em outras funcoes 'nativas'
String.prototype.toString = function () {
    return 'Lascou tudo';
}

console.log('Caon'.reverse());
