import { contact, showContact, about, showAbout } from "./script.js";

const join1 = document.getElementById("join-1");
const showOption = document.getElementById("showOption");
join1.addEventListener("click", () => showOption.showModal());

const join2 = document.getElementById("join-2");
join2.addEventListener("click", () => showOption.showModal());

const join3 = document.getElementById("join-3");
join3.addEventListener("click", () => showOption.showModal());