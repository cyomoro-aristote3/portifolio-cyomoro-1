// This file contains JavaScript functionality for the portfolio, including form validation and interactive elements.

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            validateForm();
        });
    }

    function validateForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        let valid = true;

        if (name === "") {
            alert("Please enter your name.");
            valid = false;
        }
        if (email === "") {
            alert("Please enter your email.");
            valid = false;
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            valid = false;
        }
        if (message === "") {
            alert("Please enter your message.");
            valid = false;
        }

        if (valid) {
            alert("Form submitted successfully!");
            contactForm.reset();
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});