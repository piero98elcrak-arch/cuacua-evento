// Mostrar beneficios después de registro exitoso
document.getElementById('formRegistro').addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;

  document.getElementById('confirmacion').textContent =
    `🎉 Gracias ${nombre}, tu Pase Azul ha sido registrado. Te enviaremos info a ${correo}.`;

  document.querySelector('.beneficios').classList.remove('hidden'); // 👈 muestra beneficios
});
