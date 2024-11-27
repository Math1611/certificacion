const enlacesGenero = document.querySelectorAll(".genero");
const tituloGenero = document.getElementById("titulo-genero");

enlacesGenero.forEach(enlace => {
  enlace.addEventListener("click", (event) => {
    event.preventDefault();
    const genero = enlace.getAttribute("data-genero");
    tituloGenero.textContent = genero;
});
});

function comprar(button) {
    button.textContent = "No Disponible"
    button.style.backgroundColor = "red"
    button.style.color = "white"
}


function inicioSesion (){
    alert ("Inicio de sesion exitoso");
}