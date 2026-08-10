const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const expanded = hamburger.getAttribute("aria-expanded") === "true";

    hamburger.setAttribute(
        "aria-expanded",
        !expanded
    );

});


// بستن منو بعد از کلیک روی لینک (موبایل)
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        hamburger.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});