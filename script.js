// --- PARTE 1: Corazones ---
const contenedor = document.getElementById('corazones');
for(let i=0; i<20; i++) {
    let c = document.createElement('div');
    c.innerHTML = '❤️';
    c.className = 'corazon';
    c.style.left = Math.random()*100 + '%';
    c.style.top = Math.random()*100 + '%';
    c.style.animationDelay = Math.random() * 3 + 's';
    contenedor.appendChild(c);
}

// --- PARTE 2: Música e Imágenes (Se activa con el botón) ---
function iniciarExperiencia() {
    // 1. Iniciar música
    const audio = document.getElementById("audioMusica");
    audio.play();

    // 2. Iniciar cambio de fotos
    const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg"];
    let indiceFoto = 0;
    const elementoFoto = document.getElementById('foto');

    setInterval(() => {
        indiceFoto = (indiceFoto + 1) % fotos.length;
        elementoFoto.src = fotos[indiceFoto];
    }, 3000); // Cambia cada 3 segundos
    
    // Opcional: Ocultar el botón después de presionarlo
    document.getElementById('btn-reproducir').style.display = 'none';
}
