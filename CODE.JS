// Modal Popup Functionality for Projects and About Me section
document.querySelectorAll('[data-bs-toggle="modal"]').forEach(button => {
    button.addEventListener('click', function() {
        let targetModal = document.querySelector(this.getAttribute('data-bs-target'));
        let modalInstance = new bootstrap.Modal(targetModal);
        modalInstance.show();
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        let targetId = this.getAttribute('href').substring(1);
        let targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button Functionality (Optional)
window.addEventListener('scroll', function() {
    let scrollButton = document.getElementById('scrollTopButton');
    if (window.scrollY > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

document.getElementById('scrollTopButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});