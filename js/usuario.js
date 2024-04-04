//formulario de inicio de sesion

const formularioInicio = document.querySelector("#formulario-inicio");
formularioInicio.addEventListener("submit", (e)=>{
    e.preventDefault()
    const usuario = document.querySelector("#usuario").value
    const contrasenia=document.querySelector("#contrasenia").value
    const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
    const usuarioValido = Usuarios.find(usuario => usuario.usuario === usuario && usuario.contrasenia === contrasenia);
    if (usuarioValido){
        return alert ("usuario y/o contraseña incorrectos!");
    }
    alert("¡bienvenido a Que quieres de mí!");
    window.location.href = 'productos.html'
})