// ===== Smooth Scroll Navbar =====
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ===== Greeting Based on Time =====
const heroTitle = document.querySelector(".hero h1");
const hour = new Date().getHours();

if (hour < 12) {
    heroTitle.textContent = "Good Morning, I'm Joaquin Yasser Fahd Lerapatty";
} else if (hour < 18) {
    heroTitle.textContent = "Good Afternoon, I'm Joaquin Yasser Fahd Lerapatty";
} else {
    heroTitle.textContent = "Good Evening, I'm Joaquin Yasser Fahd Lerapatty";
}


// ===== Highlight Card on Hover =====
const projectCards = document.querySelectorAll(".card");

projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
        card.style.transition = "0.2s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

