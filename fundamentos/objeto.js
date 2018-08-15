const prod1 = {} // Chaves define um OBJETO LITERAL vazio

prod1.nome = 'Ultra Mega';
prod1.preco = 123123123;
prod1['desconto legal'] = 112312; // Evitar atributos com ESPACO

console.log('produto');
console.log(prod1);

const prod2 = {
    nome: 'camisa Polo',
    valor: 79.90,
    obj: {
        blabla: 2,
        valor: 'objeto dentro de outro',
        obj: {
            valor: 'outro objeto'
        }
    }
}
/*
{
    "Um JSON": "seria assim ",
    "valorNumerico ": 64.00
}
 */

// JSON - javascript Object Notation

console.log('produto 2');
console.log(prod2);