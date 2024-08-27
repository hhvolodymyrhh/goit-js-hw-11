//3 функція вилучення(fetc анг.) карток та данних https://pixabay.com/ru/users/45653057/
export function fetchData(inputSearch) {
 
    //метод створення параметрів за допомогою строки або метод створення параметрів
    // const searchParams = `q=image&image_type=photo&orientation=horizontal&safesearch=true`;
const searchParams = new URLSearchParams({
    key : "25786434-348adb767e319176b4ad356ea",
    q: `${inputSearch}`,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
});
    return fetch(
        `https://pixabay.com/api/?${searchParams}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    }); 
}