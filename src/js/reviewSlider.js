

const swiper = new Swiper("#mySwiper", {
    speed: 0,
    effect: "fade",
    fadeEffect: {crossFade: false},
    loop: true,


    on: {
        init(sw) {
            buildDots(sw)

            animateSlide(sw.slides[sw.activeIndex])
        },

        slideChangeTransitionStart(sw) {
            const prevSlide = sw.slides[sw.prevIndex]

            const activeSlide = sw.slides[sw.activeIndex]

            animateOut(prevSlide);
            animateSlide(activeSlide);
        },
    },
});