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

