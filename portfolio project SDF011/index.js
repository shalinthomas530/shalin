const moblietoggle = document.getElementById('.mobile-menu-toggle');
const mobliemenu = document.getElementByIdl('.moblie__menu')

moblietoggle.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});

mobliemenu.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
    })
})