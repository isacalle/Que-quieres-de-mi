let productos= [];

fetch("../js/productos.json")
.then(response => response.json())
.then(data => {
    productos = data;
    cargarProductos(productos);
})



//funcion para mostrar los productos 
const cajitaProductos = document.querySelector("#cajita__productos");
let botones= document.querySelectorAll(".boton");


function cargarProductos() {
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
    <img class="cajita__imagen" src="${producto.imagen}" alt="${producto.titulo}">
    <h5 class="subtitulo__productos">${producto.titulo}</h5>
    <p class="producto__precio">$${producto.precio}</p>
    <button class="boton" id="${producto.id}" type="submit">Añadir a la compra</button>
    `;
        cajitaProductos.append(div);

    })
    botonesAgregar();
    
}

cargarProductos();

//funcion para que los botones se reflejen
function botonesAgregar (){
    botones= document.querySelectorAll(".boton");

    botones.forEach(boton =>{
        boton.addEventListener("click", agregarBolsa);
    });
}


let productosBolsa;
let productosBolsaLS =localStorage.getItem("productos-en-bolsa");
if (productosBolsaLS){
    productosBolsa = JSON.parse(productosBolsaLS);
} else {
productosBolsa= [];
}


//funcion para cargar a la bolsa de productos los seleccionados 
function agregarBolsa(e) {

    Toastify({
        text: "Se añadió a la bolsa de compras :)",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #FF7096, #ffbdcf)",
        },
        onClick: function(){} 
      }).showToast();
      
const idBoton = e.currentTarget.id;
const productoAdd= productos.find(producto => producto.id === idBoton);

if (productosBolsa.some(producto => producto.id === idBoton)){
   const index= productosBolsa.findIndex(producto => producto.id === idBoton);
   productosBolsa[index].cantidad++;
}else{
    productoAdd.cantidad = 1;
     productosBolsa.push(productoAdd);   
    }
    localStorage.setItem("productos-en-bolsa", JSON.stringify(productosBolsa));
}




