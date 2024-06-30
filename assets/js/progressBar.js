document.addEventListener("DOMContentLoaded", function() {
    var barProgress1 = document.querySelector('.bar-progress1');
    var barProgress2 = document.querySelector('.bar-progress2');
    var barProgress3 = document.querySelector('.bar-progress3');

    var barCheck1 = document.querySelector('.bar-progress1 .bar-check');
    var barCheck2 = document.querySelector('.bar-progress2 .bar-check');
    var barCheck3 = document.querySelector('.bar-progress3 .bar-check');

    var medicenterFamilySection = document.querySelector('.medicenter-family');

    var animationStarted = false; // Variável para controlar se a animação já começou

    // Função para verificar se o elemento está visível na tela
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Função para animar as barras de progresso
    function animateProgressBars() {
        if (!animationStarted && isElementInViewport(medicenterFamilySection)) {
            animationStarted = true;
            move(barProgress1, barCheck1, 92);
            move(barProgress2, barCheck2, 85);
            move(barProgress3, barCheck3, 65);
        }
    }

    // Função para animar o preenchimento das barras
    function move(progressBar, barCheckElem, targetWidth) {
        var width = 0;
        var id = setInterval(frame, 10);
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

    // Event listener para animar as barras de progresso quando o usuário rolar até a seção
    window.addEventListener('scroll', animateProgressBars);
});
