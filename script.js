// Función para lanzar confeti
function lanzarConfeti() {
  const duration = 2 * 1000; // 2 segundos
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

document.getElementById('comenzar').addEventListener('click', () => {
  document.querySelector('.landing').classList.add('hidden');
  document.querySelector('.validacion').classList.remove('hidden');
});

document.getElementById('validar').addEventListener('click', () => {
  const codigo = document.getElementById('codigo').value.trim().toUpperCase();
  const mensaje = document.getElementById('mensaje');
  if (codigo.startsWith('AZ-')) {
    mensaje.textContent = '✅ Tu Pase Azul ha sido verificado.';
    mensaje.style.color = '#00ffcc';
    lanzarConfeti(); // 🎉 Aquí lanzamos el confeti
  } else {
    mensaje.textContent = '❌ Código inválido.';
    mensaje.style.color = '#ff4444';
  }
});
