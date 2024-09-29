const elements = [...document.querySelectorAll(".hidden")]

const myObserver = new IntersectionObserver((entries)=>{
    entries.map((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

elements.map((el)=>{
    myObserver.observe(el)
})
function initSwiper() {
    var swiper = new Swiper('.swiper-container', {
        loop: true, // Habilita o loop infinito dos slides
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        grabCursor: true,
        spaceBetween: 15, // Espaçamento entre os slides
        slidesPerView: 1, // Quantidade de slides visíveis por vez
        centeredSlides: true, // Centraliza o slide ativo
    })
    swiper.on('reachBeginning', function () {
        swiper.allowSlidePrev = false; // Desativa a navegação para a esquerda
    });
    swiper.on('reachEnd', function () {
        swiper.allowSlidePrev = true; // Permite a navegação para a esquerda
    });
}
function checkScreenSize() {
    if (window.matchMedia('(max-width: 980px)').matches) {
        // Inicializa o Swiper se a largura da tela for igual ou menor que 980px
        initSwiper();
    }
}
checkScreenSize()
window.addEventListener('resize', checkScreenSize)