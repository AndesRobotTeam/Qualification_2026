// ================= HERO CAROUSEL =================
let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");

function changeSlide() {
    slides.forEach(s => s.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

setInterval(changeSlide, 4000);

// ================= SECTION SELECTOR =================
const buttons = document.querySelectorAll(".selector-btn");
const sections = document.querySelectorAll(".section-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        sections.forEach(s => s.classList.remove("active"));
        document.getElementById(btn.dataset.section).classList.add("active");
    });
});
