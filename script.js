document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggler Functionality

    const themeToggler = document.getElementById('theme-toggler');
    const body = document.body;

    // Function to set the theme
    function setTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-theme');
            themeToggler.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            themeToggler.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    }

    // Check for saved theme preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    } else {
        // Default or saved 'light' theme
        setTheme(false);
    }

    // Event listener for the theme button
    themeToggler.addEventListener('click', () => {
        // Toggle the theme
        const isCurrentlyDark = body.classList.contains('dark-theme');
        setTheme(!isCurrentlyDark);
    });

    // 2. Mobile Menu Toggler Functionality

    const menuBtn = document.getElementById('menu-btn');
    const header = document.querySelector('.header');

    menuBtn.addEventListener('click', () => {
        // Toggle the 'active' class on the menu button and header
        menuBtn.classList.toggle('fa-times');
        header.classList.toggle('active');
    });

    // Close the sidebar when a navigation link is clicked (mobile view)
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 991) {
                // Check if it's a mobile view
                menuBtn.classList.remove('fa-times');
                header.classList.remove('active');
            }
        });
    });

    // Close the sidebar on scroll (mobile view)
    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 991) {
            menuBtn.classList.remove('fa-times');
            header.classList.remove('active');
        }
    });

});