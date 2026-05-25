const contenedor = document.getElementById('corazones');
for(let i=0; i<20; i++) {
    let c = document.createElement('div');
    c.innerHTML = '❤';
    c.className = 'corazon';
    c.style.left = Math.random()*100 + '%';
    c.style.top = Math.random()*100 + '%';
    c.style.animationDelay = Math.random() * 3 + 's';
    contenedor.appendChild(c);
}
