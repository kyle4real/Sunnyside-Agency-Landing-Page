const menu = () => {
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
};

const main = () => {
    menu();
};

document.addEventListener("DOMContentLoaded", main);
