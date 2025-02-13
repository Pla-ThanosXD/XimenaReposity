document.addEventListener("DOMContentLoaded", function () {
    const flor = document.querySelector(".flor");
    const mensaje = document.getElementById("mensaje");
    const totalPetalos = 6;

    for (let i = 0; i < totalPetalos; i++) {
        setTimeout(() => {
            let petalo = document.createElement("div");
            petalo.classList.add("petalo");
            petalo.style.transform = `rotate(${i * (360 / totalPetalos)}deg) translate(30px, -20px)`;
            petalo.style.opacity = "1";
            flor.appendChild(petalo);
        }, i * 500);
    }

    setTimeout(() => {
        let centro = document.createElement("div");
        centro.classList.add("centro");
        flor.appendChild(centro);
        setTimeout(() => {
            centro.style.opacity = "1";
        }, 200);
    }, totalPetalos * 500);

    setTimeout(() => {
        mensaje.style.opacity = "1";
    }, totalPetalos * 500 + 1000);
});
