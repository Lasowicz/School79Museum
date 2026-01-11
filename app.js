                                //Слушатели на клики по логотипу и коллажу
const logo = document.getElementById("logo");
logo.addEventListener("click", function () {
    location.reload();
})
const collage = document.getElementById("collage");
collage.addEventListener("click", function () {
    window.open('https://ru.ruwiki.ru/wiki/Великая_Отечественная_война');
})


                                //Модальные окна в Main_content

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeBtn = document.querySelector('.modal-close');

                                // Все элементы галереи
const galleryItems = document.querySelectorAll('.gallery-item');

                                // Обработчик клика на изображение
galleryItems.forEach(item => {
item.addEventListener('click', function(e) {
e.preventDefault(); // Отменяем переход по ссылке

                                        // Получаем данные из текущего элемента
 const imgSrc = this.querySelector('img').src;
 const imgAlt = this.querySelector('img').alt;

                                        // Заполняем модальное окно
 modalImg.src = imgSrc;
 modalCaption.textContent = imgAlt;

                                        // Показываем модальное окно
 modal.style.display = 'flex';
 });
 });

                                // Закрытие по крестику
 closeBtn.addEventListener('click', function() {
 modal.style.display = 'none';
 });

                                // Закрытие по клику на оверлей (вне контента)
 modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
 });

                                // Закрытие по клавише Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
     }
  });

                           //TIPPY FOR PICTURES ON TO MODAL WINDOWS
tippy('[data-tippy-content]', {
    theme: 'light',
    animation: 'scale',
});