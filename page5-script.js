document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('#page5-nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});
