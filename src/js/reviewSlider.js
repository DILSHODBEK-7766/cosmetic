
const dataSwap = [

    {
        image: "./img/TESTIMONIALS-IMG.png",

        text: "After just one application, I noticed a huge difference in my glow. It didn't feel heavy or greasy at all. I honestly think this is going to be my new daily routine!",
    },

    {
        image: "./img/TESTIMONIALS-IMG.png",

        text: "Even my friends started asking what I’ve been using lately because my face looks so bright. It’s rare to find a brand that actually delivers on every single promise.",
    },

    {
        image: "./img/TESTIMONIALS-IMG.png",

        text: "The scent is so calming and the packaging looks luxury on my shelf. I’m definitely going to buy the full set next time. It is worth every penny for this kind of care.",
    },

    {
        image: "./img/TESTIMONIALS-IMG.png",

        text: "After just one application, I noticed a huge difference in my glow. It didn't feel heavy or greasy at all. I honestly think this is going to be my new daily routine!",
    },

];

const heroReview = document.getElementById("heroReview");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

const cube = document.querySelectorAll(".cube");

const reviewImg = document.getElementById("reviewImg");

const reviewStar = document.getElementById("reviewStar");

const reviewText = document.getElementById("reviewText");


// FULL PROCESS!!!

let currentIndex = 0;

// FUNCTION START!!!

function updateInfo() {
    
    const currentSwipe = dataSwap[currentIndex];

    reviewImg.classList.add("opacity-0");

    reviewText.classList.add("opacity-0");

    setTimeout(() => {

        reviewImg.src = currentSwipe.image;
        reviewText.textContent = currentSwipe.text;

        reviewImg.classList.remove("opacity-0");
        reviewText.classList.remove("opacity-0");

    }, 300);

    cube.forEach(c =>{
        c.classList.remove("bg-red-600");
        c.classList.add("bg-black");
    });

    cube[currentIndex].classList.remove("bg-black");
    cube[currentIndex].classList.add("bg-red-600");

};

updateInfo();


// NEXT BUTTON START!!!
nextBtn.addEventListener("click", ()=>{
    currentIndex++;

    if (currentIndex >= dataSwap.length) {
        currentIndex = 0;
    };
    // AGAR HOZIRGI INDEKSIMIZ MASSIVENING UZUNLIGIDAN KATTA YOKI TENG BO'LIB QOLSA HOZIRGI KO'RSATKICH 0 GA YANI BIRINCHISIGA QAYTARILADI!!!
    // =========================================================

    updateInfo();
});
// NEXT BUTTON START!!!
// ============================


// PREV BUTTON START!!!
prevBtn.addEventListener("click", () =>{
    currentIndex--;

    if(currentIndex < 0) {
        currentIndex = dataSwap.length-1;
    };
    // AGAR HOZIRGI INDEKS 0 DAN KICHIK BO'LSA!!!

    updateInfo();
});

// PREV BUTTON START!!!
// ==============================