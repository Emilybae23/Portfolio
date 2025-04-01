let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); // Toggle icon (if using FontAwesome)
    header.classList.toggle('active'); // Show/hide navbar
};

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun'); // Toggle between sun and moon icon

    // Corrected Logic
    if (document.body.classList.contains('active')) {
        document.body.classList.remove('active'); // Remove dark mode
    } else {
        document.body.classList.add('active'); // Apply dark mode
    }
};
