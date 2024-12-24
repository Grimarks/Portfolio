document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();

        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== item.nextElementSibling) {
                menu.classList.remove('show');
            }
        });

        const dropdownMenu = item.nextElementSibling;
        dropdownMenu.classList.toggle('show');
    });
});

window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});

const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('open');
});
