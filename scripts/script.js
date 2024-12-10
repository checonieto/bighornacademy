document.addEventListener('DOMContentLoaded',  function () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    let currentSlide = 0;

    function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === index) {
                    slide.classList.add("active");
                }
function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }
     // Add event listeners
        nextButton.addEventListener("click", nextSlide);
        prevButton.addEventListener("click", prevSlide);

        // Automatically lazy load images when the carousel is initialized
        slides.forEach(slide => {
            const img = slide.querySelector(".carousel-img");
            img.setAttribute("src", img.getAttribute("data-src"));
        });

        // Show the first slide initially
        showSlide(currentIndex);
    });


        // Update the transform property for smooth transitions
        const container = document.querySelector('.carousel-container');
        container.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

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
