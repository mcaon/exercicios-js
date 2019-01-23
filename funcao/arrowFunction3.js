let comparaComThis = function (param) {
    console.log(this === param); // aponta para o escopo global
};

comparaComThis(global);


const obj = {};
comparaComThis = comparaComThis.bind(obj);

comparaComThis(global); // agora aponta para o obj local devido ao bind


let comparaComThisArrow = param => console.log(this === param);
comparaComThis(global);
comparaComThis(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThis(obj);