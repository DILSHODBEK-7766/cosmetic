// 1. DOM Elementlarni ushlab olamiz
const filterBtns = document.querySelectorAll(".filterBtn");
const filterItems = document.querySelectorAll(".filterItem"); // HTML dagi oxirgi qoldirganing bo'yicha "filterItem"
const emptyMessage = document.getElementById("emptyMessage");
const productsGrid = document.getElementById("productsGrid"); // Ota grid
const shopNowBtn = document.getElementById("shopNowBtn"); // Agar HTML da ID bergan bo'lsang

// 2. Bizda mahsuloti BOR bo'lgan kategoriyalar ro'yxati (Boshqa hamma tugmalar No items found ga o'tadi)
const activeCategories = ["all", "protect", "regenerates", "revitalizes", "feeds"];

// 3. Hamma tugmalarga quloq osamiz
filterBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        
        // ==========================================
        // 1. TUGMALAR DIZAYNINI (AKTIV HOLATNI) YANGILASH
        // ==========================================
        
        // Avval hamma tugmalarni xira holatga o'tkazamiz
        filterBtns.forEach(activeBtn => {
            activeBtn.classList.remove("activeBtn", "bg-[#E4ECE0]", "text-[#213721]");
            activeBtn.classList.add("text-[#899F87]"); 
        });

        // Bosilgan tugmani yorqin (aktiv) qilamiz
        btn.classList.add("activeBtn", "bg-[#E4ECE0]", "text-[#213721]");
        btn.classList.remove("text-[#899F87]");

        
        // ==========================================
        // 2. MAHSULOTLARNI VA EKRANNI BOSHQARISH
        // ==========================================
        
        const filterName = btn.getAttribute("data-filter");
        
        // A) AGAR BOSILGAN TUGMA BO'SH BO'LSA (NO ITEMS FOUND)
        if (!activeCategories.includes(filterName)) {
            
            // 1. Har bir rasmni bittalab yashiramiz (Ekranda qotib qolmasligi uchun)
            filterItems.forEach(item => {
                item.classList.add("hidden");
            });

            // 2. Ota gridni ham yashiramiz (joy egallamasligi uchun)
            if (productsGrid) {
                productsGrid.classList.add("hidden");
                productsGrid.classList.remove("grid");
            }

            // 3. Shop Now tugmasini yashiramiz
            if (shopNowBtn) {
                shopNowBtn.classList.add("hidden");
                shopNowBtn.classList.remove("flex");
            }
            
            // 4. Bo'sh xabarni ko'rsatamiz
            emptyMessage.classList.remove("hidden");
            emptyMessage.classList.add("flex"); 

        } 
        // B) AGAR BOSILGAN TUGMADA MAHSULOT BO'LSA
        else {
            
            // 1. Bo'sh xabarni yashiramiz
            emptyMessage.classList.add("hidden");
            emptyMessage.classList.remove("flex");

            // 2. Ota gridni ko'rsatamiz
            if (productsGrid) {
                productsGrid.classList.remove("hidden");
                productsGrid.classList.add("grid");
            }

            // 3. Shop Now tugmasini ko'rsatamiz
            if (shopNowBtn) {
                shopNowBtn.classList.remove("hidden");
                shopNowBtn.classList.add("flex");
            }

            // 4. Rasmlarni aylanib chiqib, to'g'risini ko'rsatamiz, qolganini yashiramiz
            filterItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category"); 

                if (filterName === "all" || filterName === itemCategory) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        }

    });
});