```javascript
// Get the menu button and navigation links
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Open or close the menu when the button is clicked
menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});

// Close the menu after clicking a navigation link
const links = navLinks.querySelectorAll("a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("show");
    });
});
```
