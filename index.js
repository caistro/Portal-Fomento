var swiper = new Swiper(".carrosselInicial", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination-inicial",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

var swiper = new Swiper(".carrosselNoticias", {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 8000,
      },      
      pagination: {
        el: ".swiper-pagination-noticias",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

var swiper = new Swiper(".carrosselParceiros", {
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
          
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        }
        },
      centeredSlides: false,
      loop: true,
      autoplay: {
        delay: 1000,
      }
    });


function toggleMenuMobile(){
    let iconAbrir = document.getElementById("menu-abrir");
    let iconFechar = document.getElementById("menu-fechar");
    let lista = document.getElementById("lista");
    let listaNav = document.getElementById("lista-nav");
    let aberto = document.getElementById("menu-abrir").classList.contains("hidden");


    if (aberto===false){
        iconAbrir.classList.add("hidden");
        iconFechar.classList.remove("hidden");
        lista.classList.remove("hidden");
        listaNav.classList.remove("hidden");

    } else {
        iconAbrir.classList.remove("hidden");
        iconFechar.classList.add("hidden");
        lista.classList.add("hidden");
        listaNav.classList.add("hidden");

    }
    }

