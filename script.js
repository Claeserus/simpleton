/* --- 1. READ TIME CALCULATOR --- */
function updateReadTime() {
    const article = document.querySelector('.long-form');
    const display = document.getElementById('read-time');

    if (article && display) {
        const text = article.innerText;
        const words = text.split(/\s+/).length;
        const time = Math.ceil(words / 200);
        display.innerText = `April 2026 • ${time} min read`;
    }
}

/* --- 2. BACK TO TOP BUTTON LOGIC --- */
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
    // If user scrolls 300px, show button
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// The actual action when clicked
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initializing functions
updateReadTime();