window.onload = function() {
    window.scrollTo(0, 0);
};

function showNewsletterPopup() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    popup.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        overlay.style.display = 'none';
    });
});

// to display nav with width less than 700px
function showMenu() {
    console.log("Menu button clicked");
    const navLinksContainer = document.getElementById('nav-links-container');

    if (navLinksContainer.classList.contains('active')) {
        navLinksContainer.classList.remove('active');
    } else {
        navLinksContainer.classList.add('active');
    }
}