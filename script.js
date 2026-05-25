const fotos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg",
    "foto7.jpg",
    "foto8.jpg",
    "foto9.jpg"
];

const slider = document.getElementById("slider");
const musica = document.getElementById("musica");
const boton = document.getElementById("btnInicio");
const container = document.getElementById("hearts-container");

let i = 0;
let iniciado = false;

// Botón iniciar

boton.addEventListener("click", ()=>{

    if(iniciado) return;

    iniciado = true;

    musica.play();

    setInterval(()=>{

        i++;

        if(i >= fotos.length){
            i = 0;
        }

        slider.style.opacity = 0;

        setTimeout(()=>{
            slider.src = fotos[i];
            slider.style.opacity = 1;
        },500);

    },3000);

});


/* Corazones flotantes */

function crearCorazon(){

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100+"vw";
    heart.style.fontSize = (20+Math.random()*35)+"px";
    heart.style.animationDuration =
    (4+Math.random()*5)+"s";

    container.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);
}

setInterval(crearCorazon,300);azon,300);
