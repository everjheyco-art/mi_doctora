// Código para cambiar fotos
const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg"];
let indiceFoto = 0;
const elementoFoto = document.getElementById('foto');

setInterval(() => {
    indiceFoto = (indiceFoto + 1) % fotos.length;
    elementoFoto.src = fotos[indiceFoto];
}, 3000); // Cambia la foto cada 3 segundos
