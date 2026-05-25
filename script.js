function iniciarExperiencia() {
    const audio = document.getElementById("audioMusica");
    const img = document.getElementById('foto');
    const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg"];
    let i = 0;

    audio.play();
    document.getElementById('btn-reproducir').style.display = 'none';

    setInterval(() => {
        i = (i + 1) % fotos.length;
        img.src = fotos[i];
    }, 3000);
}

// Generar corazones flotantes
const contenedor = document.getElementById('corazones');
for(let i = 0; i < 20; i++) {
    let c = document.createElement('div');
    c.innerHTML = '❤️';
    c.className = 'corazon';
    c.style.left = Math.random() * 100 + '%';
    c.style.animationDelay = Math.random() * 5 + 's';
    contenedor.appendChild(c);
}
