document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const menuContainer = document.getElementById("menuContainer");
    const contentBox = document.getElementById("content-box");

    // Function to open the menu
    function openMenu() {
        menuContainer.style.display = "block";
        menuBtn.style.display = "none"; // Hide the Menu button
    }

    // Function to close the menu and content box
    function closeMenu() {
        menuContainer.style.display = "none"; // Hide the menu
        contentBox.style.display = "none"; // Hide the content box
        menuBtn.style.display = "block"; // Show the Menu button
    }

    // Attach event listeners
    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    // Function to show content when clicking a menu item (without closing the menu)
    function showContent(section) {
        let content = "";

        switch (section) {
            case 'models':
                content = `
                    <h3>Models</h3>
                    <div class="car">
                        <div class="car-name">911</div>
                        <img src="/static/images/car13.jpg" alt="Porsche 911" width="300">
                        <span class="badge">Gasoline</span>
                    </div>
                    <div class="car">
                        <div class="car-name">Taycan</div>
                        <img src="/static/images/car14.jpg" alt="Porsche Taycan" width="300">
                        <span class="badge">Electric</span>
                    </div>
                    <div class="car">
                        <div class="car-name">Panamera</div>
                        <img src="/static/images/car15.jpg" alt="Porsche Panamera" width="300">
                        <span class="badge">Gasoline</span>
                    </div>
                    <div class="car">
                        <div class="car-name">Macan</div>
                        <img src="/static/images/car16.jpg" alt="Porsche Macan" width="300">
                        <span class="badge">Gasoline</span>
                    </div>
                `;
                break;
            case 'vehicle-purchase':
                content = `<ul style="list-style-type: none; padding: 0;">
                    <li style="margin-bottom: 10px;">Vehicle Purchase</li>
                    <li style="margin-bottom: 10px;">Configure your Porsche</li>
                    <li style="margin-bottom: 10px;">Compare models</li>
                    <li style="margin-bottom: 10px;">Find new and pre-owned vehicles</li>
                    <li style="margin-bottom: 10px;">Explore e-mobility options</li>
                </ul>`;
                break;
            case 'services':
                content = "<ul><li>Services</li><li>Factory delivery</li><li>genuine accessories</li><li>individual vehicles</li><li>and maintenance services</li></ul>";
                break;
            case 'experience':
                content = "<ul><li>Experience</li><li>track experiences</li><li>Porsche clubs</li><li>and the Porsche Museum</li></ul>";
                break;
            case 'find-dealer':
                content = "<h3>Find a Dealer</h3><p>Locate authorized Porsche dealers near you.</p>";
                break;
        }

        contentBox.innerHTML = content;
        contentBox.style.display = "block"; // Show content box
    }

    // Expose function globally
    window.showContent = showContent;
});
