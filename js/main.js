
//Array de los productos 
const productos = [
    {
        //bralettes
        id: "prenda1",
        titulo: "bralette negro",
        imagen: "../img/Screenshot 2024-03-18 at 8.21.08 PM.png",
        precio: 25,
        categoria: {
            color: "negro"
        }
    },
    {
        id: "prenda2",
        titulo: "bralette rosa",
        imagen: "../img/Screenshot 2024-03-18 at 8.17.05 PM.png",
        precio: 25,
        categoria: {
            color: "rosa"
        }
    },
    {
        id: "prenda3",
        titulo: "bralette verde",
        imagen: "../img/332b07f1c49c06a78f4a18ec4d9de6d5.jpg",
        precio: 25,
        categoria: {
            color: "verde"
        }
    },
    {
        id: "prenda4",
        titulo: "bralette azul",
        imagen: "../img/ea4ea4ed0dda078245350bb8f9a96156.jpg",
        precio: 25,
        categoria: {
            color: "azul"
        }
    },
    {
        //bodys
        id: "prenda5",
        titulo: "body durazno",
        imagen: "../img/Screenshot 2024-03-18 at 8.04.58 PM.png",
        precio: 30,
        categoria: {
            color: "durazno"
        }
    },
    {
        id: "prenda6",
        titulo: "body negro",
        imagen: "../img/Screenshot 2024-03-18 at 8.09.18 PM.png",
        precio: 30,
        categoria: {
            color: "negro"
        }
    },
    {
        id: "prenda7",
        titulo: "body naranja",
        imagen: "../img/7fc863f4db721375562b7d5a8be176b6.jpg",
        precio: 30,
        categoria: {
            color: "naranja"
        }
    },
    {
        id: "prenda8",
        titulo: "body café",
        imagen: "../img/61820c2ea38e91d4d29c8489e3115698.jpg",
        precio: 30,
        categoria: {
            color: "cafe"
        }
    },
    {
        //corses
        id: "prenda9",
        titulo: "corsé negro",
        imagen: "../img/Screenshot 2024-03-18 at 8.04.00 PM.png",
        precio: 35,
        categoria: {
            color: "negro"
        }
    },
    {
        id: "prenda10",
        titulo: "corsé morado",
        imagen: "../img/Screenshot 2024-03-18 at 8.03.06 PM.png",
        precio: 35,
        categoria: {
            color: "morado"
        }
    },
    {
        id: "prenda11",
        titulo: "corsé azul",
        imagen: "../img/7613d7860a3d9a7f87eba893d8b82df7.jpg",
        precio: 35,
        categoria: {
            color: "azul"
        }
    },
    {
        id: "prenda12",
        titulo: "corsé rosa",
        imagen: "../img/Screenshot 2024-03-18 at 8.00.24 PM.png",
        precio: 35,
        categoria: {
            color: "rosa"
        }
    },
];

//funcion para mostrar los productos 
const cajitaProductos = document.querySelector("#cajita__productos");


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
}

cargarProductos();

    