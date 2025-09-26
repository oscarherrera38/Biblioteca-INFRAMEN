document.addEventListener("DOMContentLoaded", function() {
  // ====== Guardar préstamos ======
  const btnPrestamos = document.querySelectorAll(".btn-prestar");

  btnPrestamos.forEach(button => {
    button.addEventListener("click", function() {
      const titulo = this.dataset.titulo; // nombre del libro
      let prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];

      if (!prestamos.includes(titulo)) {
        prestamos.push(titulo);
        localStorage.setItem("prestamos", JSON.stringify(prestamos));
        alert(`Has prestado: ${titulo}`);
      } else {
        alert(`Ya tienes prestado: ${titulo}`);
      }
    });
  });

  // ====== Carrusel interno de cada libro ======
  const carruseles = document.querySelectorAll(".carrusel-libro");

  carruseles.forEach(carousel => {
    const imgs = carousel.querySelectorAll("img");
    let index = 0;

    // Mostrar la primera imagen al cargar
    imgs.forEach((img, i) => img.style.display = i === 0 ? "block" : "none");

    setInterval(() => {
      imgs.forEach(img => img.style.display = "none");
      imgs[index].style.display = "block";
      index = (index + 1) % imgs.length;
    }, 3000);
  });
});