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


// document.getElementById("shop").addEventListener("mouseenter", function() {
//   document.querySelector(".submenu").classList.add("show");
// });

// document.querySelector(".submenu").addEventListener("mouseleave", function() {
//   this.classList.remove("show");
// });




  