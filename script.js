// Asegúrate de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menu-btn");

  // Asegurarse de que los elementos existen
  if (menuBtn && nav) {
    console.log("Elementos encontrados");

    // Mostrar y ocultar el nav cuando se hace clic en el botón hamburguesa
    menuBtn.addEventListener("click", function (e) {
      nav.classList.toggle("show"); // Toggle para mostrar/ocultar el nav
      e.stopPropagation(); // Evitar que el clic en el botón también cierre el nav
    });

    // Cerrar el nav cuando se hace clic fuera de él
    document.addEventListener("click", function (e) {
      // Si el clic es fuera del nav y fuera del botón, se cierra el nav
      if (!nav.contains(e.target) && e.target !== menuBtn) {
        nav.classList.remove("show");
      }
    });
  }
});
