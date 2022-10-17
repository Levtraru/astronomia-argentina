const btnHam = document.querySelector(".ham-btn");
const btnTimes = document.querySelector(".times-btn");
const navBar = document.querySelector(".nav-links-750px");

/* ======== Navbar ======== */
/* Controla el comportamiento de la barra de navegacion de manera responsiva */
// Se llama al cambiar el tamaño de la ventana
window.addEventListener("resize", function () {
  var viewport_width = window.innerWidth;

  // Esconde el hamburger menu si el ancho de pantalla es mayor
  // a 750
  if (viewport_width > 750) {
    btnHam.style.display = "none";
    btnTimes.style.display = "none";
    navBar.classList.remove("show-nav");
  }
  // Si es menor a 750, muestra btnHam a menos que btnTimes y la navbar ya sean visible
  else if (btnTimes.style.display != "block") {
    btnHam.style.display = "block";
  }
});

// Esconder y mostrar los botones del hamburger menu y la barra de navegacion
// Cambia el boton y muestra la barra de navegacion
btnHam.addEventListener("click", function () {
  if (btnHam.className !== "") {
    btnHam.style.display = "none";
    btnTimes.style.display = "block";
    navBar.classList.add("show-nav");
  }
});
// Cambia el boton y oculta la barra de navegacion
btnTimes.addEventListener("click", function () {
  if (btnHam.className !== "") {
    this.style.display = "none";
    btnHam.style.display = "block";
    navBar.classList.remove("show-nav");
  }
});
/* ======== Navbar End ======== */

/* ======== Noticias ======== */
/* Hace que las noticias aparezcan con un fade al ser observadas por el usuario */
// Aplica o remueve el estilo 'shown' cuando un elemento es observado
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shown");
    } else {
      entry.target.classList.remove("shown");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
/* ======== Noticias End ======== */
