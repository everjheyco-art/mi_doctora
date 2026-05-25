const contenedor = document.getElementById('corazones');
const colores = ['#ff0055', '#990099', '#ff3366'];

// Crear corazones grandes y brillantes
for(let i = 0; i < 20; i++) {
    let c = document.createElement('div');
    c.innerHTML = '❤️';
    c.className = 'corazon';
    c.style.left = Math.random() * 90 + '%';
    c.style.top = Math.random() * 90 + '%';
    c.style.color = colores[Math.floor(Math.random() * colores.length)];
    contenedor.appendChild(c);
}

function iniciarExperiencia() {
    document.getElementById("audioMusica").play();
    document.getElementById('btn-reproducir').style.display = 'none';
    
    const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg"];
    let i = 0;
    setInterval(() => {
        i = (i + 1) % fotos.length;
        document.getElementById('foto').src = fotos[i];
    }, 3000);
}
