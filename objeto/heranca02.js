// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = 'Z';
const avo = { attr1: 'A'}; // tem o Prototype Object
const pai = { __proto__: avo, attr2: 'B'};
const filho = { __proto__: pai, attr3: 'C'};

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
};

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing ('sobrescreve' atributo do prototype)
};

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
};

Object.setPrototypeOf(ferrari, carro); // ESTABELECE RELACAO prototype entre ferrari -> carro
Object.setPrototypeOf(volvo, carro); // ESTABELECE RELACAO prototype entre volvo -> carro

console.log(ferrari);
volvo.acelerarMais(100);
console.log(volvo.status());
