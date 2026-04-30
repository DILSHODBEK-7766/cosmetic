
const slidesData = [

    {
        image: "./img/hero-cosmetic.png",
        title: "Let nature take care of your body and soul"
    },

    {
        image: "./img/hero-cosmetic.png",
        title: "Find your inner peace within the whispering winds."
    },

    {
        image: "./img/hero-cosmetic.png",
        title: "soulFeel energy of the ancient forest."
    },

    {
        image: "./img/hero-cosmetic.png",
        title: "Discover the healing power of the morning sun."
    },

];

// NEXTSLIDE!!!
const nextSlide = document.getElementById("nextSlide");

// PREVSLIDE!!!
const prevSlide = document.getElementById("prevSlide");

// IMAGE!!!
const heroImage = document.getElementById("heroImage");

// TEXT!!!
const heroTitle = document.getElementById("heroTitle");

// CUBES!!!
const heroDot = document.querySelectorAll(".heroDot");


// FULL PROCESS!!!

let currentIndex = 0;

function updateUI() {

    const currentSlide = slidesData[currentIndex];

    heroImage.src = currentSlide.image;

    heroTitle.textContent = currentSlide.title;

    heroDot.forEach(cube =>{
        cube.classList.remove("bg-[#101C10]");
        cube.classList.add("bg-[#E4ECE0]");
    });

    heroDot[currentIndex].classList.remove("bg-[#E4ECE0]");
    heroDot[currentIndex].classList.add("bg-[#101C10]");
    
}

nextSlide.addEventListener("click", ()=>{
    currentIndex++;

    if (currentIndex >= slidesData.length) {
        currentIndex = 0;
    };

    updateUI();
});

prevSlide.addEventListener("click", () =>{
    currentIndex--;

    if(currentIndex < 0) {
        currentIndex = slidesData.length-1;
    };

    updateUI();
});

updateUI();