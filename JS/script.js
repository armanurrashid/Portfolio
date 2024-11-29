/* Active Link*/
// const navLinks = document.querySelectorAll('.nav li a');
// const allSection = document.querySelectorAll(".section");
// const totalSection = allSection.length;

// navLinks.forEach(link => {
//     link.addEventListener('click', function () {
//         navLinks.forEach(nav => {
//             if (nav.classList.contains("active")) {
//                 console.log(nav)
//             }
//             nav.classList.remove('active');
//         });
//         this.classList.add('active');
//         showElement(this);
//     });
// });
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function(){
            for(let i=0; i<totalSection;i++){
                allSection[i].classList.remove("back-section");
            }
            for(let j=0;j<totalNavList;j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showElement(this)
        })
    }

// const navLinks = document.querySelectorAll('.nav li a');
// const allSection = document.querySelectorAll(".section");
// totalSection = allSection.length;
// navLinks.forEach(link => {
//     link.addEventListener('click', function () {
//         if(this.querySelector("a") && this.querySelector("a").classList.contains("active")) {
//             console.log(this.querySelector("a"));
//         }
//         navLinks.forEach(nav => nav.classList.remove('active'));
//         this.classList.add('active');
//         showElement(this)
//     });
// });

function showElement(element) {
    for(let i=0; i<totalSection;i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

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
