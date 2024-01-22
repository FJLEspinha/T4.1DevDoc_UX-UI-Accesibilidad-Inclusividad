const contact = document.getElementById("contact");
const showContact = document.getElementById("showContact");
const about = document.getElementById("about");
const showAbout = document.getElementById("showAbout");


contact.addEventListener("click", () => showContact.showModal());
about.addEventListener("click", (about) => showAbout.showModal());

export { contact, showContact, about, showAbout };