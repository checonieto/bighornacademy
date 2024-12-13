// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Show first slide
showSlide(currentSlide);

// Counting Students Animation
const studentCountElement = document.getElementById("student-count");
let count = 0;
const target = 1455;

const incrementCounter = () => {
    if (count < target) {
        count += Math.ceil(target / 100);
        studentCountElement.textContent = count > target ? target : count;
        requestAnimationFrame(incrementCounter);
    }
};

incrementCounter();

// Form Submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting Big Horn Academy!");
    document.getElementById("contact-form").reset();
});
