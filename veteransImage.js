const container = document.getElementById('veterans_container');
const newDiv = document.createElement('div');

newDiv.style.display = 'grid';
newDiv.style.gridTemplateColumns = 'repeat(4, 1fr)';
newDiv.style.padding = '10px';
newDiv.style.gap = '10px';
newDiv.style.justifyItems = 'center'; // центрируем содержимое ячеек по горизонтали
newDiv.style.alignItems = 'start';

const veteransData = ['images/veterans/veterans1.png',
    'images/veterans/veterans2.png',
    'images/veterans/veterans3.png',
    'images/veterans/veterans4.png',
    'images/veterans/veterans5.png',
    'images/veterans/veterans6.png',
    'images/veterans/veterans7.png',
    'images/veterans/veterans8.png'
];

veteransData.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Бессмертный полк';
    img.style.width = '100%';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.style.transition = 'transform 0.3s ease';

    img.onmouseover = function() {
        this.style.transform = 'scale(101%)';
    };
    img.onmouseout = function() {
        this.style.transform = 'scale(100%)';
    };
    newDiv.appendChild(img);
});
container.appendChild(newDiv);

