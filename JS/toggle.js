const navToggleBtn = document.querySelector(".nav-toggler"),
    aside =  document.querySelector(".aside");
    navToggleBtn.addEventListener("click",()=>{
        asideSectionTogglerBtn();
    })

    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navToggleBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open")
        }
    }