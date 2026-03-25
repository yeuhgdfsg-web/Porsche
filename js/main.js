// Elements
const bar = document.getElementById("scroll-bar");
const revealElements = document.querySelectorAll(".reveal");
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    // Scroll Progress Bar
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = progress + "%";


    // Reveal on Scroll
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {
            element.classList.add("show");
        }
    });


    // Card Animation on Scroll
    cards.forEach(card => {
        if (card.getBoundingClientRect().top < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });

});


// Contact Box Toggle
const btn = document.getElementById("contactBtn");
const box = document.getElementById("contactBox");

btn.addEventListener("click", () => {
    box.style.display = box.style.display === "block" ? "none" : "block";
});

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 2000);
});

// Active Navigation Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


