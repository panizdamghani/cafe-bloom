// Mobile navigation toggle with accessibility support
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
    const closeMenu = () => {
        navLinks.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
        navLinks.classList.add("active");
        hamburger.setAttribute("aria-expanded", "true");
    };

    const toggleMenu = () => {
        navLinks.classList.contains("active") ? closeMenu() : openMenu();
    };

    hamburger.addEventListener("click", toggleMenu);

    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") closeMenu();
    });

    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });
}
// Menu filter
const filterBtns = document.querySelectorAll(".filter-btn");

if (filterBtns.length > 0) {
    const sections = document.querySelectorAll(".menu-page section");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;
            
            sections.forEach(section => {
                section.classList.toggle("hidden", filter !== "all" && section.dataset.category !== filter);
            });
        });
    });
}

window.addEventListener('load', () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});
// Delay for menu 
document.querySelectorAll('.menu-item').forEach((item, i) => {
    item.style.animationDelay = `${(i + 1) * 0.1}s`;
});