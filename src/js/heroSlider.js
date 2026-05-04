
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

const heroSection = document.getElementById("heroSection");

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

// FUNCTION START!!!
function updateUI() {

    const currentSlide = slidesData[currentIndex];

    heroImage.classList.add("opacity-0");
    heroTitle.classList.add("opacity-0");

    setTimeout(() => {
        
        heroImage.src = currentSlide.image;
        heroTitle.textContent = currentSlide.title;

        heroImage.classList.remove("opacity-0");
        heroTitle.classList.remove("opacity-0");

    }, 300);

    // HAMMA CUBELARDAN ACTIVE RANGNI OLIB TASHLAYMIZ!!!
    heroDot.forEach(cube =>{
        cube.classList.remove("bg-[#101C10]");
        cube.classList.add("bg-[#E4ECE0]");
    });
    // =================================================

    // INDEKSI QAYSIDA TURGAN BO'LSA O'SHANGA QO'SHAMIZ!!!
    heroDot[currentIndex].classList.remove("bg-[#E4ECE0]");
    heroDot[currentIndex].classList.add("bg-[#101C10]");
    // =====================================================
    
}

// FUNKSIYANI ISHGA TUSHIRIB OLAMIZ HAR DOIM!!!
updateUI();
// =============================================

// FUNCTION END!!!
// ========================



// NEXT BUTTON START!!!
nextSlide.addEventListener("click", ()=>{
    currentIndex++;

    if (currentIndex >= slidesData.length) {
        currentIndex = 0;
    };
    // AGAR HOZIRGI INDEKSIMIZ MASSIVENING UZUNLIGIDAN KATTA YOKI TENG BO'LIB QOLSA HOZIRGI KO'RSATKICH 0 GA YANI BIRINCHISIGA QAYTARILADI!!!
    // =========================================================

    updateUI();
});
// NEXT BUTTON START!!!
// ============================


// PREV BUTTON START!!!
prevSlide.addEventListener("click", () =>{
    currentIndex--;

    if(currentIndex < 0) {
        currentIndex = slidesData.length-1;
    };
    // AGAR HOZIRGI INDEKS 0 DAN KICHIK BO'LSA!!!

    updateUI();
});

// PREV BUTTON START!!!
// ==============================