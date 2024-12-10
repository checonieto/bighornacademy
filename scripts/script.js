document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        localStorage.setItem('visitorName', name);
        alert(`Thank you for contacting us, ${name}!`);
    });

    const storedName = localStorage.getItem('visitorName');
    if (storedName) {
        alert(`Welcome back, ${storedName}!`);
    }
});
