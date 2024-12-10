document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    let currentSlide = 0;

    // Show the slide based on the currentSlide index
    function showSlide(index) {
        // Ensure index wraps around
        currentSlide = (index + slides.length) % slides.length;
        // Translate the container to show the correct slide
        container.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Event listener for next button
    nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Event listener for previous button
    prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    // Auto-rotate the carousel
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // Change every 5 seconds

    // Show the first slide initially
    showSlide(currentSlide);
});

    // Contact Form Validation
    document.getElementById('contactForm').addEventListener('submit', (event) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === "") {
            alert("Please enter your name.");
            event.preventDefault();
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        if (message === "") {
            alert("Please enter a message.");
            event.preventDefault();
            return;
        }

        alert("Thank you for contacting us! Your message has been submitted.");
    });
});
