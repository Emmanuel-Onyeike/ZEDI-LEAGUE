
    // Select the hamburger icon and the menu
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-bar nav ul');

    // Toggle the 'show' class when the hamburger is clicked
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

