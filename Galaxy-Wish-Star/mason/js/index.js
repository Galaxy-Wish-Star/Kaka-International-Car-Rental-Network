window.addEventListener("load", function () {
    let swipercontainer = document.querySelector("#swiper-container");
    let swiperslide = document.querySelector("#swiper-swiper");
    let a
    swiperslide.style.transition = 'all 1.2s ease'
    a="'"+"translateY("+"-"+b+"px)'"
    let b
    for (let i = 0; i >= 3; i++) {
        setTimeout(() => {
            swiperslide.style.transform = a

        }, 1000);
        b*=2;
    }
});