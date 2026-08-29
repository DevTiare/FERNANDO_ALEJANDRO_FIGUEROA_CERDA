// Interactive Logic for Fernando Figueroa Cerda Portfolio

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initPrintCV();
});

// --- Mobile Navigation Menu ---
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// --- PDF Download Handler ---
function initPrintCV() {
    const printBtns = document.querySelectorAll('.print-cv-btn');
    printBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // PDF links trigger native file download
        });
    });
}
