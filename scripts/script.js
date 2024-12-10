// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', (event) => {
    // Get form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate name
    if (name === "") {
        alert("Please enter your name.");
        event.preventDefault();
        return;
    }

    // Validate email with a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    // Validate message
    if (message === "") {
        alert("Please enter a message.");
        event.preventDefault();
        return;
    }

    // Success message (optional)
    alert("Thank you for contacting us! Your message has been submitted.");
});


    function updateCarousel() {
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    // Lazy Loading for Images
    const images = document.querySelectorAll('.carousel-img');
    function lazyLoadImages() {
        images.forEach((img) => {
            if (window.innerWidth < 768) {
                img.src = img.dataset.src; // Use mobile version
            }
        });
    }

    // Handle Screen Resize
    window.addEventListener('resize', lazyLoadImages);
    lazyLoadImages();

    // Auto-rotate carousel
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 5000); // Change every 5 seconds
});
