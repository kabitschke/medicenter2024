document.addEventListener("DOMContentLoaded", function() {
    let barProgress1 = document.querySelector('.bar-progress1');
    let barProgress2 = document.querySelector('.bar-progress2');
    let barProgress3 = document.querySelector('.bar-progress3');

    let barCheck1 = document.querySelector('.bar-progress1 .bar-check');
    let barCheck2 = document.querySelector('.bar-progress2 .bar-check');
    let barCheck3 = document.querySelector('.bar-progress3 .bar-check');

    let animationStarted = false; // Variável para controlar se a animação já começou

    // Função para verificar se o scroll atingiu 2000 pixels
    function isScrollAt2000() {
        return window.scrollY >= 2000;
    }

    // Função para animar as barras de progresso
    function animateProgressBars() {
        if (!animationStarted && isScrollAt2000()) {
            animationStarted = true;
            move(barProgress1, barCheck1, 92);
            move(barProgress2, barCheck2, 85);
            move(barProgress3, barCheck3, 65);
        }
    }

    // Função para animar o preenchimento das barras
    function move(progressBar, barCheckElem, targetWidth) {
        let width = 0;
        let id = setInterval(frame, 10);
        function frame() {
            if (width >= targetWidth) {
                clearInterval(id);
            } else {
                width++; 
                progressBar.style.width = width + '%';
                barCheckElem.innerHTML = width + '%';
            }
        }
    }

    // Event listener para animar as barras de progresso quando o usuário rolar até 2000 pixels
    window.addEventListener('scroll', animateProgressBars);
});
