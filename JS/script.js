const navLinks = document.querySelectorAll('.nav li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})


window.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-in");

    progressBars.forEach(bar => {
        const target = parseInt(bar.getAttribute("data-target"), 10);
        let width = 0;

        const interval = setInterval(() => {
            if (width >= target) {
                clearInterval(interval);
            } else {
                width++;
                bar.style.width = width + "%";
                bar.nextElementSibling.textContent = width + "%"; 
            }
        }, 18);
    });
});
