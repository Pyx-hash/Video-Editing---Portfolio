const toggle = document.getElementById("nav-toggle");
const mobile = document.getElementById("nav-mobile");

if (toggle && mobile) {
    toggle.addEventListener("click", () => {
        const open = mobile.classList.toggle("hidden") === false;
        toggle.setAttribute("aria-expanded", String(open));
    });
}

document.querySelectorAll("#nav-mobile a").forEach((link) => {
    link.addEventListener("click", () => {
        mobile.classList.add("hidden");
        toggle.setAttribute("aria-expanded", "false");
    });
});
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

if (form && statusEl) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        statusEl.textContent = "Sending...";
        await new Promise((r) => setTimeout(r, 900));
        form.reset();
        statusEl.textContent = "Thanks! I'll get back to you soon.";
        setTimeout(() => (statusEl.textContent = ''), 5000);
    });
}