const sidebarBtn = document.getElementById("sidebarBtn");

const sidebarIcon = document.getElementById("sidebarIcon");

const sidebarMenu = document.getElementById("sidebarMenu");

const shop = document.getElementById("shop");

const cart = document.getElementById("cart");

const logo = document.getElementById("logo");

const logoMedia = document.getElementById("logoMedia");

// to'liq elementlar to'plami!!!
function elements() {

    // BURGER bosilganda X ga o'zgarishi!!!
    sidebarIcon.classList.toggle("fa-bars");
    sidebarIcon.classList.toggle("fa-xmark");
    // BURGER bosilganda X ga o'zgarishi!!!
    // ============================================

    // BURGER ning rangi o'zgarishi!!!
    sidebarIcon.classList.toggle("text-[#213721]");
    sidebarIcon.classList.toggle("text-white");
    // BURGER ning rangi o'zgarishi!!!
    // ===========================================

    // BURGER ning backgroundi o'zgarishi!!!
    sidebarBtn.classList.toggle("bg-white");
    sidebarBtn.classList.toggle("bg-[rgb(142_163_140)]");
    // BURGER ning backgroundi o'zgarishi!!!
    // =====================================================
    

    // SHOP ning rangi o'zgarishi!!!
    shop.classList.toggle("text-[#F2F6EF]");
    shop.classList.toggle("text-[rgb(142_163_140)]");
    // SHOP ning rangi o'zgarishi!!!
    // =======================================

    // SHOP ning bg-si o'zgarishi!!!
    shop.classList.toggle("hover:bg-white");
    shop.classList.toggle("hover:bg-[rgb(142_163_140)]");
    shop.classList.toggle("hover:text-white");
    // SHOP ning bg-si o'zgarishi!!!
    // ======================================

    // CART ning rangi o'zgarishi!!!
    cart.classList.toggle("text-[#F2F6EF]");
    cart.classList.toggle("text-[rgb(142_163_140)]");
    // CART ning rangi o'zgarishi!!!
    // ========================================

    // CART ning bg-si o'zgarishi!!!
    cart.classList.toggle("hover:bg-white");
    cart.classList.toggle("hover:bg-[rgb(142_163_140)]");
    cart.classList.toggle("hover:text-white");
    // CART ning bg-si o'zgarishi!!!
    // ====================================

    // logo almashishi!!!
    logo.classList.toggle("max-[500px]:opacity-0");
    logo.classList.toggle("max-[500px]:pointer-events-none");

    logoMedia.classList.toggle("max-[500px]:opacity-100");
    logoMedia.classList.toggle("max-[500px]:pointer-events-auto");
    // logo almashishi!!!
    // =============================

};
// to'liq elementlar to'plami!!!
// =====================================


// button bosilgan yopilib ochilsin!!!
sidebarBtn.addEventListener("click", () =>{

    const isMenuOpen = !sidebarMenu.classList.contains("max-[1000px]:translate-x-full");

    sidebarMenu.classList.toggle("max-[1000px]:translate-x-full");

    elements();

});
// button bosilgan yopilib ochilsin!!!
// =======================================


// Esc bosilganda yopilish!!!
document.addEventListener("keydown", (keyBoard) =>{

    const isMenuOpen = !sidebarMenu.classList.contains("max-[1000px]:translate-x-full");

    if (keyBoard.key === "Escape" && isMenuOpen) {
        
        sidebarMenu.classList.add("max-[1000px]:translate-x-full");

        elements();

    };
});
// Esc bosilganda yopilish!!!
// =================================


// windows bosilganda yopilish!!!
document.addEventListener("click", (event) =>{

    const isMenuOpen = !sidebarMenu.classList.contains("max-[1000px]:translate-x-full");
    
    const clickMenu = sidebarMenu.contains(event.target);
    const clickBtn = sidebarBtn.contains(event.target);

    if (!clickBtn && !clickMenu && isMenuOpen) {
        sidebarMenu.classList.add("max-[1000px]:translate-x-full");

        elements();
    };
    
});
// windows bosilganda yopilish!!!
// ===================================