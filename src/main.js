// ключ що прриходить на почту user_id:45653057 https://pixabay.com

//1.створення форми для пошуку та результуючого ul картинок
const bodySelect = document.querySelector("body");
const firstHtml = 
`<div class="container">
    <form class="formFetchEl">
		<input type="text" class="search-input" name="search" />
		<button class="btnEl">Search</button>
    </form>
    
	  <ul class="galleryEl"></ul>
</div>`;

bodySelect.insertAdjacentHTML("afterbegin", firstHtml)


                    //імпорт бібліотек
//iziToast ДЛЯ виведення повідомлень сайт https://www.npmjs.com/package/izitoast
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
//simplelightbox ДЛЯ відтворення великих картинок https://www.npmjs.com/package/simplelightbox
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(SimpleLightbox);
//імпорт з сусідніх файлів дж ес
import { fetchData } from './js/pixabay-api.js';
import { renderData } from './js/render-functions.js';

//2 функія для отримання фото
const fetchUserForm = document.querySelector("form");
const userList = document.querySelector(".galleryEl");
// const fetchUserBtn = document.querySelector(".btnEl");

fetchUserForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const thisInputSearch = event.currentTarget.elements.search.value.toLowerCase().trim();
    
    if (!thisInputSearch) {
        return
    };

    fetchData(thisInputSearch)
        .then((comingsImg) => {
            if (comingsImg.hits.length === 0) {
                //попередження .......IZITOST.......
                //alert("Sorry, there are no images matching your search query. Please try again!");
                 iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",
                messageColor: "#000",
                messageSize: "18px",
                messageLineHeight: "20px",
                backgroundColor: "rgb(255,153,102)",
                position: "topRight",              
                 });
                 // добавити скруглення для iziToast
            const iziToastElStyle = document.querySelector(".iziToast");
            iziToastElStyle.style.borderRadius = '10px';
            iziToastElStyle.style.overflow = 'hidden';
            } else {
                //очистка попереднього вмісту карток та створення нових ".galleryEl"                
                userList.innerHTML = '';
                renderData(comingsImg.hits, userList)

                // __________ ПРОБЛЕМА З БІБЛІОТЕКОЮ________________
                    // let gallery = new SimpleLightbox('.galleryEl a', {
                    // caption: true,
                    // captionDelay: 250,
                    // captionsData: 'alt',
                    // });
                var gallery = $('.galleryEl a').simpleLightbox();

gallery.refresh();
            }
            
        })
        .catch((error) => console.log(error));
});
//2

//3

//4
