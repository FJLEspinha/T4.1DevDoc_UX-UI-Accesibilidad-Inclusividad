
import { randomButton } from "./generalActions.js";
import { contact, showContact, about, showAbout } from "./script.js";


const num = 9;
const buttonChangeColor = document.getElementById("color-change");


buttonChangeColor.addEventListener("click", () => {
    const randomNumber = randomButton(num);
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(element => {
        element.style.backgroundColor = "blueviolet";

    });
    buttons[randomNumber].style.backgroundColor = "blue";

});
