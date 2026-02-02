                                //Слушатели на клики по логотипу и коллажу


const collage = document.getElementById("collage");
collage.addEventListener("click", function () {
    window.open('https://ru.ruwiki.ru/wiki/Великая_Отечественная_война');
})


                                //Модальные окна в Main_content
const galleryItems = document.querySelectorAll('.gallery-item')

galleryItems.forEach((item) => {
    item.addEventListener('click', function (event) {
     event.preventDefault();
     const itemId = this.id;
        const modal = document.getElementById(`modal-${itemId}`);
     if (modal) {
         modal.style.display = 'block';
     }
    });
});

const closeButtons = document.querySelectorAll('.modal-close');
closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', function () {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
    });
});

window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});


                            //Модалка для почтовых реквизитов
function openPostAddressModal() {
    const modal = document.getElementById('modal-post-address');
    if (modal) {
      modal.style.display = 'block';
   }
}

const postAddressImg = document.querySelector('.post_address .icon_wrapper img');
  if (postAddressImg) {
    postAddressImg.addEventListener('click', function(event) {
      event.preventDefault();
        openPostAddressModal(); // Вызываем новую функцию
    });
}
// Обработчик на закрытие по клавише Escape, но он не рабоает, надо исправить!
  postAddressImg.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          event.preventDefault();
          const modal = document.getElementById('modal-post-address');
          if (modal) {
              modal.style.display = 'none';
          }
      }
  })

      //Функция на проверку возраста в секцию картинок "Зверства нацистов"

const atrocitiezImages = document.querySelectorAll('.modal_nazi_atrocities img');
  const images = Array.from(atrocitiezImages);
  images.forEach(image => {
      image.style.filter = 'blur(5px)';
      image.addEventListener('mouseenter', function(event) {
          image.style.filter = 'blur(0px)';
      });
      image.addEventListener('mouseleave', function(event) {
            image.style.filter = 'blur(5px)';
      });
})


// Для переключения меню на мобильных устройствах

document.querySelector('.menu-toggle').addEventListener('click', function() {
   document.querySelector('.menu').style.display = 'flex';
});


//TIPPY FOR PICTURES ON TO MODAL WINDOWS
tippy('[data-tippy-content]', {
    theme: 'light',
        animation: 'scale',
});

