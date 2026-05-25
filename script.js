function iniciarExperiencia() {
    const audio = document.getElementById("audioMusica");
    const imgElement = document.getElementById('foto');
    const boton = document.getElementById('btn-reproducir');
    
    // 1. Iniciar música
    audio.play().catch(e => console.error("Error al reproducir audio:", e));
    boton.style.display = 'none';
    
    // 2. Carrusel
    const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg"];
    let i = 0;
    
    setInterval(() => {
        i++;
        if (i >= fotos.length) i = 0;
        console.log("Cambiando a:", fotos[i]); // Esto te dirá en consola si está cambiando
        imgElement.src = fotos[i];
    }, 3000);
}
