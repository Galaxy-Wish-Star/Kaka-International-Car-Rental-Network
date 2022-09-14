window.addEventListener("load", function () {
    let swipercontainer = document.querySelector(".swiper-container");
    let swiperslide = document.querySelectorAll('.swiper-slide');

    swiperslide[0].classList.add('swiper-slide')
    swiperslide[1].classList.add('swiper-slide')
    swiperslide[2].classList.add('swiper-slide2')
    swiperslide[3].classList.add('swiper-slide3')
    console.log(swiperslide)
});