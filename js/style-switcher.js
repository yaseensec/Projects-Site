
/*----------Toggle Style Switcher---------*/

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style-switcher on scroll
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*------Theme Colors---------*/

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    localStorage.setItem("color",color);
    changeColor();
}

function changeColor(){
    alternateStyles.forEach((style) =>{
        if(localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true")
        }
    })
}

// checking if 'color' key exists
if(localStorage.getItem("color") !== null){
    changeColor();
}

/*------Theme dark & light-------*/

const dayNight = document.querySelector(".day-night");

    dayNight.addEventListener("click", () =>{
        document.body.classList.toggle("light");
        if(document.body.classList.contains("light")){
            localStorage.setItem("theme","light");
        }
        else{
            localStorage.setItem("theme","dark");
        }
        updateIcon();
    })

    function themeMode(){
        // checking if theme key exists
        if(localStorage.getItem("theme") !== null){
            if(localStorage.getItem("theme") === "dark"){
                document.body.classList.remove("light");
            }
            else{
                document.body.classList.add("light");
            }
                
        }
        updateIcon();
    }
    themeMode();

    function updateIcon(){
        if(document.body.classList.contains("light")){
            dayNight.querySelector("i").classList.remove("fa-sun");
            dayNight.querySelector("i").classList.add("fa-moon");
        }
        else{
            dayNight.querySelector("i").classList.remove("fa-moon");
            dayNight.querySelector("i").classList.add("fa-sun");
        }

    }