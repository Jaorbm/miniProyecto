const navToogle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToogle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToogle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToogle.setAttribute("aria-label", "Abrir menú");
    }
});


var botonMostrarPagina2 = document.getElementById("boton-mostrar-seccion-2");
var textoPagina2 = document.getElementById("texto-pagina-2");

botonMostrarPagina2.addEventListener("click", function() {
    textoPagina2.style.display = "block";
});


