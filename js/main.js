/*
//funcion simple
function saludar(nombre) {
    console.log("nombre de usuario: " + nombre);
    alert("Hola " + nombre + " bienvenidx a ¡Qué quieres de mí!");
}
saludar(prompt("¡Hola! Ingresa tu nombre :)"));


//función constructora
function Prenda(id, nombre, precio, talla) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.talla = talla;
}

//objetos 
const prenda1 = new Prenda(1, "Bralette", 25, "S");
const prenda2 = new Prenda(2, "Bralette", 25, "M");
const prenda3 = new Prenda(3, "Bralette", 25, "L");
const prenda4 = new Prenda(4, "Body", 30, "S");
const prenda5 = new Prenda(5, "Body", 30, "M");
const prenda6 = new Prenda(6, "Body", 30, "L");
const prenda7 = new Prenda(7, "Corsé", 35, "S");
const prenda8 = new Prenda(8, "Corsé", 35, "M");
const prenda9 = new Prenda(9, "Corsé", 35, "L");


//array y forEach para generar la lista de las prendas con sus descripciones 
const listaPrendas = [prenda1, prenda2, prenda3, prenda4, prenda5, prenda6, prenda7, prenda8, prenda9];
let mensaje = "Elija una de las prendas disponibles: \n";
listaPrendas.forEach((prenda) => {
    mensaje += `${prenda.id}: ${prenda.nombre} - $${prenda.precio} - Talla ${prenda.talla}\n`;
});


//switch
let prendaEscogida = parseInt(prompt(mensaje));
let prendaSeleccionada;
switch (prendaEscogida) {
    case 1:
        prendaSeleccionada = prenda1;
        console.log(prenda1);
        alert("Has escogido un " + prenda1.nombre + " talla " + prenda1.talla + " a un valor de " + prenda1.precio + " dlrs");
        break;

    case 2:
        prendaSeleccionada = prenda2;
        console.log(prenda2);
        alert("Has escogido un " + prenda2.nombre + " talla " + prenda2.talla + " a un valor de " + prenda2.precio + " dlrs");
        break;

    case 3:
        prendaSeleccionada = prenda3;
        console.log(prenda3);
        alert("Has escogido un " + prenda3.nombre + " talla " + prenda3.talla + " a un valor de " + prenda3.precio + " dlrs");
        break;

    case 4:
        prendaSeleccionada = prenda4;
        console.log(prenda4);
        alert("Has escogido un " + prenda4.nombre + " talla " + prenda4.talla + " a un valor de " + prenda4.precio + " dlrs");
        break;

    case 5:
        prendaSeleccionada = prenda5;
        console.log(prenda5);
        alert("Has escogido un " + prenda5.nombre + " talla " + prenda5.talla + " a un valor de " + prenda5.precio + " dlrs");
        break;

    case 6:
        prendaSeleccionada = prenda6;
        console.log(prenda6);
        alert("Has escogido un " + prenda6.nombre + " talla " + prenda6.talla + " a un valor de " + prenda6.precio + " dlrs");
        break;

    case 7:
        prendaSeleccionada = prenda7;
        console.log(prenda7);
        alert("Has escogido un " + prenda7.nombre + " talla " + prenda7.talla + " a un valor de " + prenda7.precio + " dlrs");
        break;

    case 8:
        prendaSeleccionada = prenda8;
        console.log(prenda8);
        alert("Has escogido un " + prenda8.nombre + " talla " + prenda8.talla + " a un valor de " + prenda8.precio + " dlrs");
        break;

    case 9:
        prendaSeleccionada = prenda9;
        console.log(prenda9);
        alert("Has escogido un " + prenda9.nombre + " talla " + prenda9.talla + " a un valor de " + prenda9.precio + " dlrs");
        break;
    default:
        console.log("prenda no disponible");
        alert("prenda no disponible");
}

let cantidad = parseInt(prompt("Ingresa cuantas prendas deseas:"));
console.log("Cantidad de prendas: " + cantidad);
alert("Has seleccionado: " + cantidad + " " + prendaSeleccionada.nombre);



//variable para sumar la prenda seleccionada con la cantidad deseada 
let totalCompra = prendaSeleccionada.precio * cantidad;
console.log("El total de la compra es: " + totalCompra + " dlrs");
alert("El total de tu compra es de: " + totalCompra + " dlrs");


*/
