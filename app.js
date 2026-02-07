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


                                 // Обработчик на закрытие по клавише Escape (РЕШИТЬ ПРОБЛЕМУ С ВОЗВРАШЕНИЕМ СОСТОЯНИЯ ОКНА. ПОКА РЕАЛИЗОВАЛ ЧЕРЕЗ RELOAD!!!)
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' || event.key === 'Esc') {
          event.preventDefault();
          const modals = document.querySelectorAll('.modal, .modal-content, [data-modal]');
          if (modals.length>0) {
              modals.forEach(modal => {
                  modal.style.display = 'none';
                  location.reload();
              })
              document.activeElement?.blur();
              console.log(`Закрыто ${modals.length} модальных окон`);
          }
      }
  })

      //Функция на проверку возраста в секцию картинок "Зверства нацистов" ПОКА РАБОТАЕТ ТОЛЬКО БЛЮР, ДОРАБОТАТЬ!

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


                     // Поиск контейнеров data-src для их загрузки в модалки на основной странице

 document.addEventListener('DOMContentLoaded', function() {
     const loadContainers = document.querySelectorAll('.modal-content [data-src]');
     loadContainers.forEach((container) => {
         const filePath = container.getAttribute('data-src');
         if (!filePath) {
         console.warn('Атрибут data-src не найден:', container);
         return;
     }
     fetch(filePath)
             .then(response => {
                 if(!response.ok) {
                     throw new Error(`Ошибка загрузки: ${filePath} (статус: ${response.status})`);
                 }
                 return response.text();
             })
             .then(html => {
             container.innerHTML = html;
             console.log('Контент загружен:', filePath);
             })
         .catch(error => {
             console.error('Ошибка:', error);
             container.innerHTML = `
           <div class="error-message">
            <p>Не удалось загрузить контент.</p>
            <p><small>Путь: ${filePath}</small></p>
          </div>
        `;
         });
     });
 });

// Для переключения меню на мобильных устройствах

document.querySelector('.menu-toggle').addEventListener('click', function() {
   document.querySelector('.menu').style.display = 'flex';
});


//TIPPY FOR PICTURES ON TO MODAL WINDOWS
tippy('[data-tippy-content]', {
    theme: 'light',
        animation: 'scale',
});

