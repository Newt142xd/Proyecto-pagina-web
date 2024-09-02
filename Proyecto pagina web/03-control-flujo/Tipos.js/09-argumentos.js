function suma (a, c) {
    console.log(arguments);
    return a + c;
}

let resultado = suma(5, 8, 4, 8);
console.log(resultado);
console.log(typeof suma);