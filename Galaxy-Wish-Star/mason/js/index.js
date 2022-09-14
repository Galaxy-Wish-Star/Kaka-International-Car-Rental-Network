window.addEventListener("load", function () {
    let swipercontainer = document.querySelector(".swiper-container");
    let swiperslide = document.querySelectorAll('.swiper-slide');
setTimeout(() => {
    swiperslide[0].classList.add('swiper-slide1')
    swiperslide[1].classList.add('swiper-slide1')
}, 2500);
    setTimeout(() => {
        swiperslide[1].classList.remove('swiper-slide1')
        swiperslide[1].classList.add('swiper-slide2')
        swiperslide[2].classList.add('swiper-slide2')
    }, 5000);
   setTimeout(() => {
       swiperslide[2].classList.remove('swiper-slide2')
    swiperslide[2].classList.add('swiper-slide3')
    swiperslide[3].classList.add('swiper-slide3')
   }, 7500);
    

});