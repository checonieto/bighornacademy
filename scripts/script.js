document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const container = document.querySelector('.carousel-container');
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');

    let currentSlide = 0; // Tracks the current slide index
    const totalSlides = slides.length;

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth;
        container.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    function showNextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Event Listeners for Buttons
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Recalculate layout on window resize
    window.addEventListener('resize', updateCarousel);

    // Initialize Carousel
    updateCarousel();
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
