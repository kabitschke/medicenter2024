document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.parallax2-item');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    const controlLeft = document.querySelector('.control-left');
    const controlRight = document.querySelector('.control-right');

    controlLeft.addEventListener('click', prevItem);
    controlRight.addEventListener('click', nextItem);

    // Exibir o primeiro item inicialmente
    showItem(currentIndex);
});
