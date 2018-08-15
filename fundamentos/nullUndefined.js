let valor; // nao atribuir valor algum

console.log(valor);

valor = null;

console.log(valor);

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.70;
console.log(produto);

produto.preco = undefined; // Evitar undefined, deixar para linguagem atribuir valores undefined
console.log(produto);

produto.preco = null; // Sem Preco
console.log(produto);