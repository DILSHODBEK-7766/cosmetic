const pageDown = document.getElementById("pageDown");

const pageDownIcon = document.getElementById("pageDownIcon");

const pageDownMenu = document.getElementById("pageDownMenu");

const pageContainer = document.getElementById("pageContainer");

function dropDown() {

    // DESKTOP VERSIYA START!!!
    pageDownMenu.classList.toggle("opacity-0");
    pageDownMenu.classList.toggle("pointer-events-none");
    // DESKTOP VERSIYA END!!!
    // =======================================

    pageDownIcon.classList.toggle("-rotate-180");

    // MOBILE VERSIYA START!!!
    pageDownMenu.classList.toggle("max-[1000px]:max-h-0");
    pageDownMenu.classList.toggle("max-[1000px]:max-h-[400px]");
    // MOBILE VERSIYA END!!!
    // ===============================
}

pageDown.addEventListener("click", event =>{

    event.preventDefault();

    if (window.innerWidth < 1000) {
        dropDown();
    }

});


pageContainer.addEventListener("mouseenter", () =>{
    if (window.innerWidth > 1000 && pageDownMenu.classList.contains("opacity-0")) {
        dropDown();
    }
});

pageContainer.addEventListener("mouseleave", () =>{
    if (window.innerWidth > 1000 && !pageDownMenu.classList.contains("opacity-0")) {
        dropDown();
    }
});