// --- PARTE 1: Crear la lluvia de 40 corazones al cargar ---
const contenedor = document.getElementById('corazones');

for(let i = 0; i < 40; i++) { 
    let c = document.createElement('div');
    c.innerHTML = '❤️';
    c.className = 'corazon';
    
    // Posición aleatoria horizontal
    c.style.left = Math.random() * 100 + '%';
    
    // Velocidades (entre 4 y 10 segundos) y retrasos aleatorios
    c.style.animationDuration = (Math.random() * 6 + 4) + 's'; 
    c.style.animationDelay = Math.random() * 5 + 's';
    
    contenedor.appendChild(c);
}

// --- PARTE 2: Música e Imágenes (Se activa con el botón) ---
function iniciarExperiencia() {
    // 1. Iniciar música
    const audio = document.getElementById("audioMusica");
    audio.play();

    // 2. Iniciar cambio de fotos (cada 3 segundos)
    const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg"];
    let indiceFoto = 0;
    const elementoFoto = document.getElementById('foto');

    setInterval(() => {
        indiceFoto = (indiceFoto + 1) % fotos.length;
        elementoFoto.src = fotos[indiceFoto];
    }, 3000); 
    
    // 3. Ocultar el botón después de presionarlo
    document.getElementById('btn-reproducir').style.display = 'none';
}
