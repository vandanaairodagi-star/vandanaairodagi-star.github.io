
// Wait until the webpage is loaded
document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Display a welcome message in the browser console
    console.log("Welcome to my personal portfolio!");

});
