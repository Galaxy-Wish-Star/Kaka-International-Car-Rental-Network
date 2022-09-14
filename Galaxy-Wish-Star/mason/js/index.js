window.addEventListener("load", function(){
    let swipercontainer=document.querySelector("#swiper-container");
    let swiperslide=document.querySelector("#swiper-swiper");

setTimeout(() => {
    swiperslide.style.transform='translateY(-420px)'
    swiperslide.style.transition='all 1.2s ease'
}, 1000);
});