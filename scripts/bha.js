// script.js

// Function to fetch and display weather for Worland, Wyoming
const fetchWeather = async () => {
    const weatherContainer = document.getElementById("weather");
    const apiKey = "your_openweathermap_api_key"; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Worland,US&units=imperial&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Weather data not available");
        
        const weatherData = await response.json();
        const { main, weather, wind } = weatherData;

        weatherContainer.innerHTML = `
            <h3>Current Weather in Worland, Wyoming</h3>
            <p><strong>Temperature:</strong> ${main.temp}°F</p>
            <p><strong>Condition:</strong> ${weather[0].description}</p>
            <p><strong>Humidity:</strong> ${main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${wind.speed} mph</p>
        `;
    } catch (error) {
        weatherContainer.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    }
};

// Call fetchWeather when the DOM loads
document.addEventListener("DOMContentLoaded", fetchWeather);

// Navigation highlighting
const navLinks = document.querySelectorAll(".nav li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");
    });
});

// Form validation for Contact Page
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Your message has been submitted successfully!");
        contactForm.reset();
    });
}
