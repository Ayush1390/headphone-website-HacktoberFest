let menu = document.querySelector(".menu");
let menuList = document.querySelector(".mobile-items");

menu.addEventListener("click", () => {
    menuList.classList.toggle('hidden');
});