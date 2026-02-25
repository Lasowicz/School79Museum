const veteransData = [
    { img: './images/veterans/veteran1.png', alt: 'Ветеран 1'},
    { img: './images/veterans/veteran2.png', alt: 'Ветеран 2'},
    { img: './images/veterans/veteran3.png', alt: 'Ветеран 3'},
    { img: './images/veterans/veteran4.png', alt: 'Ветеран 4'},
    { img: './images/veterans/veteran5.png', alt: 'Ветеран 5'},
    { img: './images/veterans/veteran6.png', alt: 'Ветеран 6'},
    { img: './images/veterans/veteran7.png', alt: 'Ветеран 7'},
    { img: './images/veterans/veteran8.png', alt: 'Ветеран 8'},
]

const veteranContainer = document.querySelector('.veterans_container');

veteransData.forEach(item => {
    const html = `
    <div class="veterans_container">
      <a href="images/artifacts_images/${item.img}" target="_blank">
        <img src="images/artifacts_images/${item.img}" alt="${item.alt}" class="artifacts_image">
      </a>
      <div class="text-container">${item.text}</div>
    </div>
  `;
    container.insertAdjacentHTML('beforeend', html);
});