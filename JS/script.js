/* Active Link*/

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
       removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showElement(this)
    })
}
function removeBackSection(){
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
    allSection[num].classList.add("back-section");
}
function showElement(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active")
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index")
    showElement(this)
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
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
