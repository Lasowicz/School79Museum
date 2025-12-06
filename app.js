                                //Слушатели на клики по логотипу и коллажу
const logo = document.getElementById("logo");
logo.addEventListener("click", function () {
    location.reload();
})
const collage = document.getElementById("collage");
collage.addEventListener("click", function () {
    window.open('https://ru.ruwiki.ru/wiki/Великая_Отечественная_война');
})

                                //Слушатели на клики по логотипу и коллажу
const button_memorable_and_history_date = document.getElementsByClassName('memorable_and_history_date');
button_memorable_and_history_date.addEventListener("click", function () {
console.log("memorable_and_history_date");
})

