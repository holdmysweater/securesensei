const menu = document.querySelector('.menuToggle');
const linkMenu = document.querySelector('.navbarMenu');
const links = document.querySelectorAll('.mainLink');


menu.addEventListener('click', toggleMenu);
updateLinks();

function toggleMenu(){
    menu.classList.toggle('active');
    linkMenu.classList.toggle('active');
}
