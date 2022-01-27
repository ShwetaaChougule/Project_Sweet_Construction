const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.ham-main');

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
})