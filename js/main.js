//funcion

function saludar(nombre){
console.log("Hola " + nombre);
alert("Hola " + nombre + " bienvenidx a Qué quieres de mí!");
}
saludar(prompt("ingrese su nombre"));


//algoritmo condicional

let prenda1 = "Bralette";
let prenda2 = "Body";
let prenda3 = "Corsé";

prendaEscogida = prompt("Elija una de las prendas");
if (prendaEscogida == "Bralette") {
    console.log("Bralette");
    alert("precio: " + 25);

} else if (prendaEscogida == "Body") {
    console.log("Body");
    alert("precio: " + 30);

} else if (prendaEscogida == "Corsé") {
    console.log("Corsé");
    alert("Precio: " + 35);
} else {
    console.log("Prenda no encontrada");
    alert("Prenda no encontrada")
}


// Algoritmo de ciclo 

let ingresarCantidad= parseInt( prompt("Ingresa cuantas prendas desea (maximo 3)"));

switch (ingresarCantidad) {
case 1:
console.log("1 prenda");
alert("una prenda seleccionada");
break;

case 2:
console.log("2 prendas");
alert("dos prendas seleccionada");
break;

case 3:
console.log("3 prendas");
alert("tres prendas seleccionada");
break;

default: 
console.log("cantidad no disponible");
alert("cantidad no disponible");
}

alert("has escogido " + ingresarCantidad + " " + prendaEscogida);
