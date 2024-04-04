let productosBolsa = localStorage.getItem("productos-en-bolsa");
productosBolsa = JSON.parse(productosBolsa);

const contBolsaProductos = document.querySelector("#bolsa-productos");
const contBolsaAcciones = document.querySelector("#bolsa-acciones");
const botonVaciar = document.querySelector("#vaciar-bolsa");
const total = document.querySelector("#total");
const botonComprar = document.querySelector("#finalizar-compra");


//funcion para cargar los productos a la bolsa de compras 
function cargarProductosBolsa() {
    if (productosBolsa) {




        contBolsaProductos.classList.remove("disabled");
        contBolsaAcciones.classList.remove("disabled");
        


        contBolsaProductos.innerHTML = "";


        productosBolsa.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("bolsa-producto");
            div.innerHTML = `  
            <img class="bolsa-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    
        <div class="bolsa-titulo">
            <h2 class="bolsa-subtitulo">${producto.titulo}</h2>
        </div>
    
        <div class="bolsa-cantidad">
            <h4>Cantidad</h4>
            <p>${producto.cantidad}</p>
        </div>
        <div class="bolsa-precio">
            <h4>Precio</h4>
            <p class="producto__precio">$${producto.precio}</p>
        </div>
        <div class="" bolsa-producto-subtotal>
            <h4>Subtotal</h4>
            <p>$${producto.precio * producto.cantidad}</p>
        </div>`;

            contBolsaProductos.append(div);

        })

    } else {
        
        contBolsaProductos.classList.add("disabled");
        contBolsaAcciones.classList.add("disabled");
        

    }
    actualizarTotal();
}

cargarProductosBolsa();

//funcion para eliminar los productos de la bolsa de compras 

botonVaciar.addEventListener("click", vaciarBolsa);
function vaciarBolsa() {

    productosBolsa.length = 0;
    localStorage.setItem("productos-en-bolsa", JSON.stringify(productosBolsa));
    cargarProductosBolsa();
}
//funcion para sumar el valor de los productos y sacar el total a pagar 

function actualizarTotal() {

    const totalCalculado = productosBolsa.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
};

//formulario de datos de envio y metodo de pago 

const formularioCompra = document.querySelector("#formulario-compra");
formularioCompra.addEventListener("submit", (e)=> {
    e.preventDefault()
    const direccion = document.querySelector("#direccion").value 
    const nombreRecibe = document.querySelector("#nombre-recibe").value
    const cedulaRecibe = document.querySelector("#cedula-recibe").value
    const tarjeta = document.querySelector("#tarjeta").value
    const nombreTarjeta = document.querySelector("#nombre-tarjeta").value
    const codigo = document.querySelector("#codigo-sec").value

    const Datos = JSON.parse(localStorage.getItem('datos')) || []
    const datosRegistrados = Datos.find(direccion => direccion.tarjeta === tarjeta);
    if (datosRegistrados){
        return alert("¡Gracias por tu compra!");
    }
    Datos.push({direccion: direccion, nombreRecibe: nombreRecibe, cedulaRecibe: cedulaRecibe, tarjeta: tarjeta, nombreTarjeta: nombreTarjeta, codigo:codigo});
    localStorage.setItem("datos", JSON.stringify(Datos));
    alert("¡Gracias por tu compra!");
    window.location.href='productos.html'

})

//funcion para que al hacer click en el boton de finalizar compra se eliminen los productos de la bolsa
botonComprar.addEventListener("click", comprarBolsa);
function comprarBolsa() {

    productosBolsa.length = 0;
    localStorage.setItem("productos-en-bolsa", JSON.stringify(productosBolsa));
    
    contBolsaProductos.classList.add("disabled");
    contBolsaAcciones.classList.add("disabled");

}





