document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

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
