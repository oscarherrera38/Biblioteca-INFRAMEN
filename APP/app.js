// ======== CARRUSEL ========
let currentIndex = 0;

// Función para mover el carrusel
function moveCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const images = carousel.querySelectorAll("img");
  const total = images.length;

  // Actualizar índice
  currentIndex += direction;

  // Ciclo infinito
  if (currentIndex < 0) {
    currentIndex = total - 1; // último
  } else if (currentIndex >= total) {
    currentIndex = 0; // primero
  }

  // Desplazar carrusel al índice actual
  const offset = images[currentIndex].offsetLeft;
  carousel.scrollTo({
    left: offset,
    behavior: "smooth"
  });
}

// ======== AUTO-PLAY ========
setInterval(() => {
  moveCarousel(1);
}, 4000); // cambia cada 4 segundos