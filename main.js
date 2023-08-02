const btnMenu = document.querySelector(".btn-open");
const btnclose = document.querySelector(".btn-close");
const Menu = document.querySelector(".menu-principal");

btnMenu.addEventListener("click", function (){
    Menu.style.opacity = "1";
    this.style.display = "none";
    btnclose.style.display = "block";
});

btnclose.addEventListener("click", function (){
    Menu.style.opacity = "0";
    this.style.display = "none";
    btnMenu.style.display = "block";
});