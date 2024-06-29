document.addEventListener('DOMContentLoaded', function() {
  const carrossel = document.querySelector('.team-list');
  const items = document.querySelectorAll('.team-list .item');
  const nextButton = document.querySelector('.control-right');
  const prevButton = document.querySelector('.control-left');
  const totalItems = items.length;
  const itemsPerPage = 4; // Número de itens visíveis por vez
  let currentIndex = 0;

  function updateCarrossel() {
      carrossel.style.transform = `translateX(-${currentIndex * (100 / itemsPerPage)}%)`;
  }

  nextButton.addEventListener('click', function() {
      if (currentIndex < totalItems - itemsPerPage) {
          currentIndex++;
      } else {
          currentIndex = 0; // Volta ao início
      }
      updateCarrossel();
  });

  prevButton.addEventListener('click', function() {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = totalItems - itemsPerPage; // Vai para o final
      }
      updateCarrossel();
  });

  updateCarrossel(); // Atualiza a posição inicial do carrossel
});
