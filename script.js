document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");

    // Create 500 boxes dynamically
    for (let i = 0; i < 500; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        content.appendChild(box);
    }

    // Screensaver effect with floating dots
    const screensaver = document.createElement("div");
    screensaver.id = "screensaver";
    document.body.appendChild(screensaver);

    function createDot() {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style.position = "absolute";
        dot.style.top = Math.random() * 100 + "vh";
        dot.style.left = Math.random() * 100 + "vw";
        dot.style.width = "5px";
        dot.style.height = "5px";
        dot.style.backgroundColor = "#ffffff";
        dot.style.borderRadius = "50%";
        dot.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.8)";
        dot.style.animation = "fadeOut 5s linear";
        screensaver.appendChild(dot);

        setTimeout(() => {
            screensaver.removeChild(dot);
        }, 5000);
    }

    setInterval(createDot, 300);
});
document.querySelectorAll(".folder").forEach(folder => {
    folder.addEventListener("click", () => {
        folder.classList.toggle("active");
    });
});
// Sidebar Folder Dropdown Functionality
document.querySelectorAll(".folder").forEach(folder => {
    folder.addEventListener("click", () => {
        let submenu = folder.nextElementSibling;
        if (submenu && submenu.classList.contains("submenu")) {
            submenu.classList.toggle("open");
        }
    });
});
// JavaScript to animate the progress bars on load for Experience page
document.addEventListener("DOMContentLoaded", function() {
    // Get all the progress bars
    const progressBars = document.querySelectorAll('.experience-level-bar > div');

    // Animate the progress bars when the page loads
    progressBars.forEach(function(bar) {
        const width = bar.style.width; // Get the width of the bar (percentage)

        // Animate the width from 0% to the actual width
        bar.style.width = '0%';

        // Start animation after the page is loaded
        setTimeout(() => {
            bar.style.transition = 'width 2s ease-in-out'; // Apply smooth transition
            bar.style.width = width; // Set the actual width value
        }, 200);
    });
});
// JavaScript to animate the skill level progress bars on load for Skills page
document.addEventListener("DOMContentLoaded", function() {
    // Get all the skill progress bars
    const skillBars = document.querySelectorAll('.skill-bar > div');

    // Animate the progress bars when the page loads
    skillBars.forEach(function(bar) {
        const width = bar.style.width; // Get the width of the bar (percentage)

        // Start from 0% width for smooth animation
        bar.style.width = '0%';

        // Animate the progress bars with a slight delay
        setTimeout(() => {
            bar.style.transition = 'width 2s ease-in-out'; // Apply smooth transition
            bar.style.width = width; // Set the actual width value
        }, 200);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Sidebar dropdown functionality
    const folders = document.querySelectorAll(".folder");

    folders.forEach(folder => {
        folder.addEventListener("click", function () {
            // Toggle active state
            this.classList.toggle("active");

            // Find the submenu inside this folder
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains("submenu")) {
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Fade-in animation for contact form & social links
    const fadeInElements = document.querySelectorAll(".glass-content h1, .glass-content p, .glass-content form, .socials");

    fadeInElements.forEach((el, index) => {
        el.style.opacity = "0";
        setTimeout(() => {
            el.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 200);
    });

    // Add smooth hover effect for social media links
    const socialLinks = document.querySelectorAll(".social-link");

    socialLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.3s ease-in-out";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Contact form validation (basic)
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const name = document.querySelector("input[name='name']").value.trim();
            const email = document.querySelector("input[name='email']").value.trim();
            const message = document.querySelector("textarea[name='message']").value.trim();

            if (!name || !email || !message) {
                event.preventDefault();
                alert("Please fill in all fields.");
            }
        });
    }
});
document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form redirect

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            document.getElementById("form-status").textContent = "Message Sent Successfully!";
            form.reset(); // Clear form fields
        } else {
            document.getElementById("form-status").textContent = "Error sending message. Try again.";
        }
    } catch (error) {
        document.getElementById("form-status").textContent = "Network error. Check your connection.";
    }
});
function showCategory(category) {
    document.querySelectorAll('.skills-list').forEach(el => el.classList.add('hidden'));
    document.getElementById(category).classList.remove('hidden');

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="showCategory('${category}')"]`).classList.add('active');
}

function showExperience(category) {
    document.querySelectorAll('.experience-list').forEach(el => el.classList.add('hidden'));
    document.getElementById(category).classList.remove('hidden');

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="showExperience('${category}')"]`).classList.add('active');
}

function showMLSection(category) {
    document.querySelectorAll('.ml-section').forEach(el => el.classList.add('hidden'));
    document.getElementById(category).classList.remove('hidden');

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="showMLSection('${category}')"]`).classList.add('active');
}
function showService(category) {
    document.querySelectorAll('.service-list').forEach(el => el.classList.add('hidden'));
    document.getElementById(category).classList.remove('hidden');

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="showService('${category}')"]`).classList.add('active');
}
// Filter Web Dev Skills by Category
function filterCategory(category) {
    document.querySelectorAll('.skill-card').forEach(card => {
        if (card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="filterCategory('${category}')"]`).classList.add('active');
}

// Smooth Scroll to Contact Section
document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}
