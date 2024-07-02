const menuMobile = document.querySelector(".menuMobile");
const menu = document.querySelector(".menu");

menuMobile.addEventListener('click', () => {
    menu.classList.toggle('show-menu');

});

let isMenuOpen = false;// Variável para controlar se o menu está aberto

 // Adiciona um event listener para o evento resize
window.addEventListener('resize', () => {

    if(window.innerWidth > 700 ){
        //Fecha o menu
        menu.classList.remove('show-menu');
        isMenuOpen = false; //atualiza o estado do menu para fechado
    }
});

// Adiciona um event listener para o evento de transição do menu
menu.addEventListener('transitionend', () => {
     // Verifica se o menu foi aberto ou fechado após a transição
    if (menu.classList.contains('show-menu')){
        isMenuOpen = true; // Atualiza o estado do menu para aberto
    }else{
        isMenuOpen = false;  // Atualiza o estado do menu para fechado
    }
});


// Função para monitorar o scroll da página
function monitorarScroll() {
    // Obtém a posição atual do scroll vertical
    let scrollTop = window.scrollY;
    let header = document.querySelector(".header-area");
    // console.log('Scroll from the top: ' + scrollTop + 'px');
    

    if (scrollTop > 100) {
        header.classList.add("header-area-fixed");
    }else{
        header.classList.remove("header-area-fixed");
    }
}

// Adiciona um event listener para o evento 'scroll' do objeto window
window.addEventListener('scroll', monitorarScroll);





  