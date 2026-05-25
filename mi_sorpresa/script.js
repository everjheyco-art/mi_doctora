const contenedor = document.getElementById('corazones');

// Aumentamos a 50 corazones para un efecto más lleno
for(let i = 0; i < 50; i++) { 
    let c = document.createElement('div');
    c.innerHTML = '❤️';
    c.className = 'corazon';
    
    // Posición aleatoria horizontal
    c.style.left = Math.random() * 100 + '%';
    
    // Velocidades y retrasos aleatorios para que no se muevan todos iguales
    c.style.animationDuration = (Math.random() * 5 + 5) + 's'; 
    c.style.animationDelay = Math.random() * 5 + 's';
    
    contenedor.appendChild(c);
}
