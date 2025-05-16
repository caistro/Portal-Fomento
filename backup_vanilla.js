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
/*    
function direita(){
    let imagem1 = document.getElementById("carrossel-Imagem-1")
    let imagem2 = document.getElementById("carrossel-Imagem-2")
    let imagem3 = document.getElementById("carrossel-Imagem-3")
    let imagem4 = document.getElementById("carrossel-Imagem-4")
    let hidden = [imagem1.classList.contains('hidden'), imagem2.classList.contains('hidden'), imagem3.classList.contains('hidden'), imagem4.classList.contains('hidden')]
    let atual

    //verifica qual é a imagem atual na tela
    switch (hidden.indexOf(false)) {
        case 0:
            atual = imagem1.src
        break;
        case 1:
            atual = imagem2.src
        break;
        case 2:
            atual = imagem3.src
        break;
        case 3:
            atual = imagem4.src
        break;
    
        default:
            break;
    }

    //executa a transição para a próxima imagem e seta ela como atual
    switch(atual){
        case imagem1.src:
            imagem1.classList.add('transition', 'duration-500', 'ease-in-out', '-translate-x-full')
            imagem2.classList.remove('hidden')

            setTimeout(()=>{
                imagem2.classList.add('-translate-x-full');
                setTimeout(()=>{
                    imagem1.classList.replace('-translate-x-full', 'hidden')
                    imagem1.classList.add('translate-x-full')
                    imagem2.classList.remove('transition', 'duration-500', 'ease-in-out', '-translate-x-full');
                },800)
            },1)   
            atual = imagem2.src
            break;

        case imagem2.src:
            imagem2.classList.add('transition', 'duration-500', 'ease-in-out', '-translate-x-full')
            imagem3.classList.remove('hidden')

            setTimeout(()=>{
                imagem3.classList.add('-translate-x-full');
                setTimeout(()=>{
                    imagem2.classList.replace('-translate-x-full', 'hidden')
                    imagem3.classList.remove('transition', 'duration-500', 'ease-in-out', '-translate-x-full');
                },800)
            },1)   
            atual = imagem3.src
        break;

        case imagem3.src:
            imagem3.classList.add('transition', 'duration-500', 'ease-in-out', '-translate-x-full')
            imagem4.classList.remove('hidden')

            setTimeout(()=>{
                imagem4.classList.add('-translate-x-full');
                setTimeout(()=>{
                    imagem3.classList.replace('-translate-x-full', 'hidden')
                    imagem4.classList.remove('transition', 'duration-500', 'ease-in-out', '-translate-x-full');
                },800)
            },1)   
            atual = imagem4.src
        break;

        case imagem4.src:
            imagem4.classList.add('transition', 'duration-500', 'ease-in-out', '-translate-x-full')
            setTimeout(()=>{
                imagem1.classList.remove('hidden', 'translate-x-full')
            },500)

            setTimeout(()=>{
                imagem1.classList.add('-translate-x-full');
                setTimeout(()=>{
                    imagem4.classList.replace('-translate-x-full', 'hidden')
                    imagem1.classList.remove('transition', 'duration-500', 'ease-in-out', '-translate-x-full');
                },800)
            },1)   
            atual = imagem1.src
        break;

        default:
            break;
    }
}
*/

function direita(){
    let imagem1 = document.getElementById("carrossel-Imagem-1")
    let imagem2 = document.getElementById("carrossel-Imagem-2")
    let imagem3 = document.getElementById("carrossel-Imagem-3")
    let imagem4 = document.getElementById("carrossel-Imagem-4")
    let hidden = [imagem1.classList.contains('hidden'), imagem2.classList.contains('hidden'), imagem3.classList.contains('hidden'), imagem4.classList.contains('hidden')]
    let atual
    let proxima

    //verifica qual é a imagem atual na tela
    switch (hidden.indexOf(false)) {
        case 0:
            atual = imagem1.src
            proxima = imagem2.src
        break;
        case 1:
            atual = imagem2.src
            proxima = imagem3.src
        break;
        case 2:
            atual = imagem3.src
            proxima = imagem4.src
        break;
        case 3:
            atual = imagem4.src
            proxima = imagem1.src
        break;
    
        default:
        break;
    }

    //anima a troca de imagens
    function animaTrocaMeio(atual, proxima, seguinte, duracao = 500){
        return new Promise((resolve)=>{
            atual.classList.add('transition', `duration-${duracao}`, 'ease-in-out', '-translate-x-full');
            proxima.classList.remove('hidden');  
            
            setTimeout(()=>{
                proxima.classList.add('-translate-x-full');
                    setTimeout(()=>{
                        atual.classList.replace('-translate-x-full', 'hidden');
                        proxima.classList.remove('transition', 'duration-500', 'ease-in-out', '-translate-x-full')
                        proxima = seguinte
                        atual = proxima
                        resolve()
                    },duracao)
                
            },duracao)
        })
    }

    function animaTrocaPonta(atual,proxima,seguinte,duracao =500){
        return new Promise((resolve)=>{
            proxima.classList.add('translate-x-full')
            atual.classList.add('transition', `duration-${duracao}`, 'ease-in-out', '-translate-x-full');
            proxima.classList.remove('hidden');  
            
            setTimeout(()=>{
                //proxima.classList.add('translate-x-full');
                setTimeout(()=>{
                    atual.classList.replace('-translate-x-full', 'hidden');
                    proxima.classList.remove('transition', 'duration-500', 'ease-in-out', 'translate-x-full')
                    proxima = seguinte
                    atual = proxima
                    resolve()
                },duracao)
                
            },duracao)
        })

    }


    switch(atual){
        case imagem1.src:
            animaTrocaMeio(imagem1, imagem2, imagem3)
            .then(()=>{
                atual = imagem2.src
            })
        break;

        case imagem2.src:
            animaTrocaMeio(imagem2, imagem3, imagem4)
            .then(()=>{
                atual = imagem3.src 
            })

        break;

        case imagem3.src:
            animaTrocaMeio(imagem3, imagem4, imagem1)
            .then(()=>{
                atual = imagem4.src    
            })


        break;

        case imagem4.src:
            animaTrocaPonta(imagem4, imagem1, imagem2)
            .then(()=>{
                atual = imagem1.src  
            })


        break;

        default:
            break;
    }
}


function esquerda (){
    let imagem1 = document.getElementById("carrossel-Imagem-1")
    let imagem2 = document.getElementById("carrossel-Imagem-2")
    let imagem3 = document.getElementById("carrossel-Imagem-3")
    let imagem4 = document.getElementById("carrossel-Imagem-4")
    let hidden = [imagem1.classList.contains('hidden'), imagem2.classList.contains('hidden'), imagem3.classList.contains('hidden'), imagem4.classList.contains('hidden')]
    let atual

    //verifica qual é a imagem atual na tela
    switch (hidden.indexOf(false)) {
        case 0:atual = imagem1.src
        break;
        case 1:atual = imagem2.src
        break;
        case 2:atual = imagem3.src
        break;
        case 3:atual = imagem4.src
        break;
        default:
        break;
    }

    switch (atual) {
        case imagem1.src:
            
        break;

        case imagem2.src:

        break;

        case imagem3.src:
        
        break;

        case imagem4.src:
        
        break;

    
        default:
            break;
    }


}
