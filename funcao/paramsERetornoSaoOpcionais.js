function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`);
    } else {
        return area;
    }
}

area(20,10);
console.log(area(2,2));
console.log(area(2));
console.log(area());
console.log(area(2, 4, 5, 6));