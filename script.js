// Ensure the document is ready before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the hamburger icon and nav-links container
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    // Log to console for debugging
    console.log("Hamburger and navLinks elements loaded.");

    // Check if elements are correctly selected
    if (hamburger && navLinks) {
        // Add a click event to toggle the nav menu
        hamburger.addEventListener('click', () => {
            console.log("Hamburger clicked!");
            navLinks.classList.toggle('active');  // Toggle the 'active' class
        });
    } else {
        console.error("Couldn't find the hamburger or navLinks elements.");
    }
});
