                                //Слушатели на клики по логотипу и коллажу

const logo = document.getElementById("logo");
logo.addEventListener("click", function () {
    location.reload();
})
const collage = document.getElementById("collage");
collage.addEventListener("click", function () {
    window.open('https://ru.ruwiki.ru/wiki/Великая_Отечественная_война');
})