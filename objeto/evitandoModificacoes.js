// Object.preventExtensions - proibe de adicionar atributos ao objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
});

console.log('Extensivel: ', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha branca';
delete produto.tag;
console.log(produto);


// Object.seal - nao consegue adicionar nem excluir elementos, mas consegue alterar atributos existentes
const pessoa = {nome: 'Juliana', idade: 35};
Object.seal(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Teste';
pessoa.nome = 'Teste';

console.log(pessoa);


// Objeto.freeze = selado + valores constantes

