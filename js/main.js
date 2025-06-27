// Handle mobile navigation
document.addEventListener('DOMContentLoaded', () => {
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send the form data to a server
            console.log('Form submitted:', formData);
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to current navigation item
    const currentPage = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
});

// Only run the color cycling on the index page
if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
    let currentState = 1;
    const totalStates = 3;

    function cycleColors() {
        // Remove current state
        document.body.classList.remove(`state-${currentState}`);
        
        // Move to next state
        currentState = currentState % totalStates + 1;
        
        // Add new state
        document.body.classList.add(`state-${currentState}`);
    }

    // Add initial state
    document.body.classList.add('state-1');

    // Start cycling colors every 500ms
    setInterval(cycleColors, 5000);
} 