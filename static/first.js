/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    menuToggle.addEventListener("click", () => {
        alert("Menu button clicked!");
    });

    const chatIcon = document.querySelector(".chat-icon");
    chatIcon.addEventListener("click", () => {
        alert("Chat feature coming soon!");
    });
});