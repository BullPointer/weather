import createDiv from "./createDiv";
import rightWeather from "./rightWeather";
import leftWeather from "./leftWeather";
import showWeather from "./showWeather";


export default function() {
    const searchInput = document.querySelector('.search-location');
    const searchBtn = document.querySelector('.search-btn');

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.querySelector('.search-btn').click();
        }
    });
    searchBtn.addEventListener('click', () => {
        const container = document.querySelector('.container');
        const weatherDisplay = document.querySelector('.weatherDisplay');
        const content = createDiv('content');
        const searchInput = document.querySelector('.search-location');

        if(searchInput.value === '') return alert('undefined') 
        localStorage.setItem("country", searchInput.value);

        container.removeChild(container.firstElementChild);
        content.append(leftWeather(), rightWeather());
        container.insertBefore(content, container.firstElementChild);
        while (weatherDisplay.hasChildNodes()) {
            weatherDisplay.firstChild.remove()
        }
        showWeather(weatherDisplay);
    })
}