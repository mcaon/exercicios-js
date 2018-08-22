let num1 = 1;
let num2 = 2;

num1++; // Operador unario POST FIX (pos fixada)
console.log(num1);
--num1; // pode ser num1--   PRE FIX Possui precedencia em operacoes POST FIX
console.log(num1);

console.log(++num1 === num2--); // ++ executa antes da comparacao e o -- foi executado DEPOIS da comparacao