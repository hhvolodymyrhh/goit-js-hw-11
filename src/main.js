// ключ що прриходить на почту user_id:45653057

//створення форми для пошуку та результуючого ul картинок
const bodySelect = document.querySelector("body");
const firstHtml = 
`<div class="container">
    <form class="formFetchEl">
		<input type="text" class="search-input" name="Search" />
		<button class="btnEl">Search</button>
    </form>
    
	  <ul class="galleryEl"></ul>
</div>`;

bodySelect.insertAdjacentHTML("afterbegin", firstHtml)

//функія для отримання фото
const fetchUserForm = document.querySelector("form");
const fetchUserBtn = document.querySelector(".btnEl");


fetchUserForm.addEventListener("submit", (event) => {
    event.preventDefault();
    fetchData()
        .then((users) => renderData(users))
        .catch((error) => console.log(error));
});

//функція вилучення(fetc анг.)
async function fetchData(inputSearch) {
    const userList = document.querySelector(".galleryEl");
    //метод створення параметрів за допомогою строки або метод створення параметрів
    // const searchParams = `q=image&image_type=photo&orientation=horizontal&safesearch=true`;

const searchParams = new URLSearchParams({
    key : "45653057",
    q: 'name',
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
});
    const response = await fetch(
        `https://pixabay.com/api/?${searchParams}`
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
}

function renderData(dataImg) {
    const markup = dataImg.map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-list-item>
            <a class="gallery-link" href="${largeImageURL}">
                    <img class="img" src="${webformatURL}" 
                        alt="${tags}" 
                        title="${tags}" />
                    <ul class="data-list">
                        <li class="data-item">
                            <p class="data-item-name">Likes</p>
                            <p class="data-likes">${likes}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Views</p>
                            <p class="data-views">${views}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Comments</p>
                            <p class="data-comments">${comments}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Downloads</p>
                            <p class="data-downloads">${downloads}</p>
                        </li>
                    </ul>
                </a> 
          </li>`;
    }).join("");
    console.log(markup)
    userList.insertAdjacentHTML("beforeend", markup)
}