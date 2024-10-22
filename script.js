//1 definimos función normal
function hola(a,b){
    return a+b;
}

console.log(hola(3,5));

//2 convertir a función flecha
const suma = (a,b) =>{
    return a+b;
}
console.log(suma(3,5));

//3 Simplificar
const suma2 = (a,b) => a+b;
console.log(suma(5,5));

//4 solo un parametro
const cuadrado = x => x*x;
console.log(cuadrado(5));