```javascript
// Responsive Navigation Bar
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});

// Contact Form Validation
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    errorMessage.textContent = "";
    successMessage.textContent = "";

    if (name === "") {
        errorMessage.textContent = "Please enter your name.";
    }
    else if (email === "") {
        errorMessage.textContent = "Please enter your email.";
    }
    else if (!email.includes("@") || !email.includes(".")) {
        errorMessage.textContent = "Please enter a valid email.";
    }
    else if (message === "") {
        errorMessage.textContent = "Please enter your message.";
    }
    else {
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
    }
});
```
