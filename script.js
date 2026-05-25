function iniciarExperiencia() {
    // 1. Iniciar música
    const audio = document.getElementById("audioMusica");
    audio.play().catch(e => console.log("Error al reproducir audio:", e));
    
    // 2. Ocultar botón
    document.getElementById('btn-reproducir').style.display = 'none';
    
    // 3. Iniciar carrusel de imágenes
    const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg"];
    let i = 0;
    const img = document.getElementById('foto');
    
    setInterval(() => {
        i = (i + 1) % fotos.length;
        img.src = fotos[i];
    }, 3000); // 3000 milisegundos = 3 segundos
}

// Generar corazones al cargar la página
const contenedor = document.getElementById('corazones');
for(let i = 0; i < 30; i++) { 
    let c = document.createElement('div');
    c.innerHTML = '❤️';
    c.className = 'corazon';
    c.style.left = Math.random() * 100 + '%';
    c.style.animationDuration = (Math.random() * 5 + 5) + 's'; 
    c.style.animationDelay = Math.random() * 5 + 's';
    contenedor.appendChild(c);
}
