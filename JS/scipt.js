const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger?.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    burger.classList.toggle("active");
});

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollBtn) {
        scrollBtn.style.display = scrollY > 500 ? "block" : "none";
    }
}, { passive: true });

scrollBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
