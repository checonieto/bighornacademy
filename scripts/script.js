document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const container = document.querySelector('.carousel-container');
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    let currentSlide = 0;

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length; // Wrap around the slides
        container.style.transform = `translateX(-${currentSlide * 100}%)`; // Slide to the correct position
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Button Event Listeners
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Lazy Loading Images
    function lazyLoadImages() {
        slides.forEach(slide => {
            const img = slide.querySelector('.carousel-img');
            if (img && img.dataset.src && window.innerWidth < 768) {
                img.src = img.dataset.src; // Replace with mobile image if screen size is small
            }
        });
    }
    window.addEventListener('resize', lazyLoadImages);
    lazyLoadImages();

    // Auto-rotate Carousel
    setInterval(nextSlide, 5000); // Move to the next slide every 5 seconds

    // Initialize carousel
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
