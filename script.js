// --- CONFIGURACIÓN DE CORAZONES ---
const contenedor = document.getElementById('corazones');
const numCorazones = 40; // Más corazones para un efecto más lleno

function crearCorazones() {
    for(let i = 0; i < numCorazones; i++) {
        let c = document.createElement('div');
        c.innerHTML = '❤️';
        c.className = 'corazon';
        
        // Posiciones aleatorias en toda la pantalla
        c.style.left = Math.random() * 100 + '%';
        c.style.top = Math.random() * 100 + '%';
        
        // Tamaños aleatorios para mayor profundidad
        c.style.fontSize = (Math.random() * 20 + 20) + 'px';
        
        // Velocidades de animación aleatorias
        c.style.animationDuration = (Math.random() * 5 + 5) + 's';
        c.style.animationDelay = Math.random() * 5 + 's';
        
        contenedor.appendChild(c);
    }
}

// Inicializamos los corazones al cargar la página
crearCorazones();

// --- LÓGICA DE LA EXPERIENCIA ---
function iniciarExperiencia() {
    // 1. Reproducción de audio con manejo de errores
    const audio = document.getElementById("audioMusica");
    audio.play().catch(error => {
        console.log("El navegador requiere interacción previa para el audio.");
    });
    
    // 2. Ocultar el botón
    const boton = document.getElementById('btn-reproducir');
    if (boton) boton.style.display = 'none';
    
    // 3. Carrusel de imágenes
    const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg"];
    let i = 0;
    const imgElement = document.getElementById('foto');
    
    // Cambiar foto inmediatamente antes del primer intervalo
    i = (i + 1) % fotos.length;
    imgElement.src = fotos[i];
    
    // Intervalo de cambio de fotos
    setInterval(() => {
        i = (i + 1) % fotos.length;
        imgElement.src = fotos[i];
    }, 3000); // 3 segundos por foto
}
