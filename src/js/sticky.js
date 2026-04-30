
const stickBar = document.getElementById("stickBar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80 && window.innerWidth > 1000) {
        stickBar.classList.add("sticky");
    } else {
        stickBar.classList.remove("sticky");
    }
});