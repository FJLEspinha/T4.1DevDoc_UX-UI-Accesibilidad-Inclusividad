import { contact, showContact, about, showAbout } from "./script.js";

const optionsMenu = document.querySelectorAll('.li-items');
// Obtener el input del menú hamburguesa
const inputMenu = document.getElementById('menu');

// Iterar sobre cada opción y agregar un manejador de eventos de clic
optionsMenu.forEach((opcion) => {
    opcion.addEventListener('click', () => {
        // Ocultar el menú hamburguesa al hacer clic en una opción
        inputMenu.checked = false;
    });
});

const information = document.getElementById("text-info");
const container = document.getElementById("carouselExampleControlsNoTouching");

container.addEventListener("click", () => {

    if (information.style.visibility == "visible") {

        information.style.visibility = "hidden";
    }

});

const fast = document.getElementById("fast");
const guardians = document.getElementById("guad");
const spiderman = document.getElementById("spi");
const mario = document.getElementById("sm");
const creator = document.getElementById("crea");
const textInfo = document.getElementById("text-info");

fast.addEventListener("click", () => {

    textInfo.style.visibility = "visible";
    textInfo.textContent = "Año de Estreno: 2023" + "\n" + "Genero: Acción " + "" + "\n\tDuración: 141 min";
});
guardians.addEventListener("click", () => {

    textInfo.style.visibility = "visible";
    textInfo.textContent = "Año de Estreno: 2023" + "\r" + "Genero: Fantasía" + "\n" + "Duración: 150 min";
});

spiderman.addEventListener("click", () => {

    textInfo.style.visibility = "visible";
    textInfo.textContent = "Año de Estreno: 2023" + "\r" + "Genero: Comedia de acción" + "\n" + "Duración: 140 min";
});

mario.addEventListener("click", () => {

    textInfo.style.visibility = "visible";
    textInfo.textContent = "Año de Estreno: 2023" + "\r" + "Genero: Aventura" + "\n" + "Duración: 92 min";
});

creator.addEventListener("click", () => {

    textInfo.style.visibility = "visible";
    textInfo.textContent = "Año de Estreno: 2023" + "\r" + "Genero: Acción" + "\n" + "Duración: 133 min";
});


