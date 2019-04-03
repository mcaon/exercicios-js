const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 220
}

// acessa o SUPER OBJETO - objeto pai
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto___ === undefined)


function MeuObjeto() {
}
console.log(typeof Object, typeof  MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
