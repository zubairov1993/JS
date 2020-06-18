/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let adv = document.querySelectorAll('.promo__adv img');
let promo = document.querySelector('.promo__bg');
let promoGenre = promo.querySelector('.promo__genre');
let movieList = document.querySelector('.promo__interactive-list');
let movieItems = movieList.querySelectorAll('.promo__interactive-item');
let listMovie = movieDB.movies.sort();

adv.forEach(item => {
    item.remove();
});

promo.style.background = 'url(img/bg.jpg) center center/cover no-repeat';
promoGenre.textContent = 'ДРАМА';

movieItems.forEach(item => {
    item.remove();
});

listMovie.forEach((item, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${item}
        <div class="delete"></div>
    </li>
    ` 
});

console.log(movieItems);
