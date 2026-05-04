
const stickBar = document.getElementById("stickBar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        stickBar.classList.add("sticky");
    } else {
        stickBar.classList.remove("sticky");
    }
});