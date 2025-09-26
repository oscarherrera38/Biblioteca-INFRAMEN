document.addEventListener("DOMContentLoaded", function() {
  // Seleccionamos el formulario
  const form = document.getElementById("form-contacto");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // Capturamos los valores (opcional, si quieres procesarlos)
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    // Aquí podrías agregar validaciones extras o enviar los datos a un backend

    // Mensaje de confirmación
    alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente.`);

    // Limpiamos el formulario
    form.reset();
  });
});



















