// Fotos

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

let i = 0;
const slider = document.getElementById("slider");

setInterval(() => {
    i++;
    if(i >= fotos.length){
        i = 0;
    }

    slider.style.opacity = 0;

    setTimeout(() => {
        slider.src = fotos[i];
        slider.style.opacity = 1;
    },300);

},3000);


// Corazones flotantes

const container = document.getElementById("hearts-container");

function crearCorazon(){

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100+"vw";
    heart.style.fontSize =
    Math.random()*30+15+"px";

    heart.style.animationDuration =
    Math.random()*5+4+"s";

    container.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);
}

setInterval(crearCorazon,300);
