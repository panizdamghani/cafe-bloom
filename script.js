/*navbar*/
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {

    const closeMenu = () => {
        navLinks.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
    };

    const toggleMenu = () => {
        const isOpen = navLinks.classList.contains("active");
        if (isOpen) {
            closeMenu();
        } else {
            navLinks.classList.add("active");
            hamburger.setAttribute("aria-expanded", "true");
        }
    };

    hamburger.addEventListener("click", toggleMenu);

    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") closeMenu();
    });

    document.addEventListener("click", (e) => {
        const isClickInsideNav = navLinks.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);
        if (!isClickInsideNav && !isClickOnHamburger) closeMenu();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

}
/*filter menu*/
const filterBtns = document.querySelectorAll(".filter-btn");

if (filterBtns.length > 0) {
    const sections = document.querySelectorAll(".menu-page section");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            sections.forEach(section => {
                if (filter === "all" || section.dataset.category === filter) {
                    section.classList.remove("hidden");
                } else {
                    section.classList.add("hidden");
                }
            });
        });
    });
}
window.addEventListener('load',() =>{
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target){
            setTimeout(() =>{
                target.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});
/* delay menu*/ 
document.querySelectorAll('.menu-item').forEach((item, i) => {
    item.style.animationDelay = `${(i + 1) * 0.1}s`;
});