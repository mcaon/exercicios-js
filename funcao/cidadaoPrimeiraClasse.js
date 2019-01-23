// Funcao em JS é um First-Class Object (Citizen)
// Higher-Order Function

// criar de forma literal
function fun1() { }


// Armazenar em uma variavel
const fun2 = function () { } // funcao anonima atribuida para uma constante


// Armazenar em um array
const array = [function (a,b) { return a + b}, fun1, fun2];
console.log(array[0](2,3));


// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'};
console.log(obj.falar());


// Passar funcao como param
function run(fun) {
    fun(); // Executa a funcao passada como parametro
}

run(function () {console.log('Executando')});


// Uma funcao pode retornar/conter uma funcao
function soma(a,b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2,3)(4); // Passa 4 como parametro C para a funcao contida em soma(a,b)
const cincoMais = soma(2,3);
cincoMais(4); // mesmo efeito da chamada acima