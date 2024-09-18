// ключ що прриходить на https://pixabay.com

/**
 * Немає сенсу додавати статичну розмітку через js
 * Це все краще перенести в index.html
 */
//1.створення форми для пошуку та результуючого ul картинок
// const bodySelect = document.querySelector('body');
// const firstHtml = `<div class="container">
//     <form class="formFetchEl">
// 		<input type="text" class="search-input" name="search" />
// 		<button class="btnEl">Search</button>
//     </form>
//     <span class="loader">Loading</span>
// 	  <ul class="galleryEl"></ul>
// </div>`;
// bodySelect.insertAdjacentHTML('afterbegin', firstHtml);

//0 завантажувач
const loader = document.querySelector('.loader');
//0 прибирання з виду завантажувача
loader.style.display = 'none';

/**
 * Всі імпорти виконуються на початку файлу js
 */
//імпорт бібліотек
//iziToast ДЛЯ виведення повідомлень сайт https://www.npmjs.com/package/izitoast https://marcelodolza.github.io/iziToast/
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//simplelightbox ДЛЯ відтворення великих картинок https://www.npmjs.com/package/simplelightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
//імпорт з сусідніх файлів дж ес
import { fetchData } from './js/pixabay-api.js';
import { renderData } from './js/render-functions.js';
//підключення картинки для ізітост з папок проекту
import iconUrl from './img/octagon.svg';

let gallery = new SimpleLightbox('.galleryEl a', {
  caption: true,
  captionDelay: 250,
  captionsData: 'alt',
});

//2 функія для отримання фото
const fetchUserForm = document.querySelector('form'); // слово "fetch" позначає дію, а тут у змінні посилання на DOM-елемент
const userList = document.querySelector('.galleryEl');
// const fetchUserBtn = document.querySelector(".btnEl");

fetchUserForm.addEventListener('submit', event => {
  event.preventDefault();
  //очистка попереднього вмісту карток та створення нових ".galleryEl"
  userList.innerHTML = '';

  const thisInputSearch = event.currentTarget.elements.search.value
    .toLowerCase()
    .trim();

  if (!thisInputSearch) {
    iziToast.show({
      class: 'notification attention',
      message: 'Input cannot be empty',
      position: 'topCenter',
    });
    return;
  }

  fetchData(thisInputSearch)
    .then(comingsImg => {
      if (comingsImg.hits.length === 0) {
        //попередження .......IZITOST.......
        //alert("Sorry, there are no images matching your search query. Please try again!");
        iziToast.show({
          class: 'notification sorry', // за допомогою цієї властивості можна легко додати стилі через CSS
          message:
            'Sorry, there are no images matching <br> your search query. Please try again!',
          position: 'topRight',
          iconUrl: iconUrl,
          imageWidth: 30,
          timeout: null,
          // messageColor: '#000',
          // messageSize: '18px',
          // messageLineHeight: '20px',
          // backgroundColor: 'rgb(255,153,102)',
        });

        /**
         * модифіковані стилі теж простіше додати через CSS
         */
        // добавити скруглення для iziToast
        // const iziToastElStyle = document.querySelector('.iziToast');
        // iziToastElStyle.style.borderRadius = '10px';
        // iziToastElStyle.style.overflow = 'hidden';
      } else {
        //очистка попереднього вмісту карток та створення нових ".galleryEl"
        userList.innerHTML = '';
        //0 завантажувач видимий
        loader.style.display = 'block';
        renderData(comingsImg.hits, userList);

        //метод для оновлення бібліотеки
        gallery.refresh();
        //0 Перевірте завантаження всіх зображень
        const images = userList.querySelectorAll('img');
        let loadedImagesCount = 0;

        images.forEach(img =>
          img.addEventListener('load', evt => {
            /**
             * Перевірку чи завантажились зображення
             * краще реалізувати таким чином відображення прелоадеру:
             * - спочатку перевіряємо чи завершилось завантаження зображення
             * - якщо завантаження завершилось, додаємо одиницю до лічильника
             * - перевіряємо чи завантажились усі зобрження
             * - якщо завантажились усі зображення відключаємо прелоадер
             */
            if (evt.target.complete) {
              loadedImagesCount++;
            }
            if (loadedImagesCount === images.length) {
              /**
               * Потестувати роботу лоадера можна змінивши швидкість
               * інтернет зʼєднання в DevTools
               * В такому випадку гарно видно, що лоадер працює до тих пір,
               * поки вантажаться усі зображення
               */
              // Сховати індикатор завантаження після завантаження всіх картинок
              loader.style.display = 'none';
            }
          })
        ); //0
      }
    })
    .catch(error => {
      //попередження .......IZITOST.......
      //alert(`Sorry, ${error}. Please try again!`);
      iziToast.show({
        class: 'notification-sorry',
        message: `Sorry, ${error}. Please try again!`,
        position: 'topRight',
        // messageColor: '#000',
        // messageSize: '18px',
        // messageLineHeight: '20px',
        // backgroundColor: 'rgb(255,153,102)',
      });
      // добавити скруглення для iziToast
      // const iziToastElStyle = document.querySelector('.iziToast');
      // iziToastElStyle.style.borderRadius = '10px';
      // iziToastElStyle.style.overflow = 'hidden';
    });
  //0 добавить у будьякому випадку вимкнення стилю але відпрацьовує скоріше ніж завантажаться картинки
  //     .finally(() => {
  //        loader.style.display = 'none';
  // });
});
