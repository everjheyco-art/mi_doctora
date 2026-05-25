// --- Lógica para los corazones flotantes ---
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

// --- Lógica para iniciar música y fotos ---
function iniciarExperiencia() {
    const audio = document.getElementById("audioMusica");
    audio.play().catch(e => console.log("Error al reproducir audio:", e));
    
    document.getElementById('btn-reproducir').style.display = 'none';
    
    const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg"];
    let i = 0;
    setInterval(() => {
        i = (i + 1) % fotos.length;
        document.getElementById('foto').src = fotos[i];
    }, 3000);
}
