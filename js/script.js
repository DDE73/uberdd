window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navi__menu'),
    menuItem = document.querySelectorAll('li'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navi__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navi__menu_active');
        })
    })
})