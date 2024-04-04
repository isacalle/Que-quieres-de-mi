//formulario de registro

const formularioRegistro = document.querySelector("#formulario-registro");
formularioRegistro.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nombre = document.querySelector("#nombre").value
    const usuario = document.querySelector("#usuario").value
    const contrasenia = document.querySelector("#contrasenia").value
    const email = document.querySelector("#email").value
    
    const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
    const usuariosRegistrados = Usuarios.find(usuario => usuario.email === email);
    if (usuariosRegistrados){
        return alert("El usuario ya esta registrado");
    }
    Usuarios.push({nombre: nombre, usuario: usuario, email: email, contrasenia: contrasenia});
    localStorage.setItem("usuarios", JSON.stringify(Usuarios));
    alert("Registro existoso!");
})