import createDiv from "./createDiv";
import rightWeather from "./rightWeather";
import leftWeather from "./leftWeather";
import showWeather from "./showWeather"; 
import { getApi } from "./api/fetchApi";
import errorFunc from "./errorFunc";

export default function() {
    const searchInput = document.querySelector('.search-location');
    const searchBtn = document.querySelector('.search-btn');

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.querySelector('.search-btn').click();
        }
    });
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const link = 'https://api.weatherapi.com/v1/current.json';
        const container = document.querySelector('.container');
        const weatherDisplay = document.querySelector('.weatherDisplay');
        const content = createDiv('content');
        const searchInput = document.querySelector('.search-location');

        if(searchInput.value === '') return alert('undefined');
        getApi(link, searchInput.value).then((res) => {
            localStorage.setItem("country", searchInput.value);
            
            if (res.status == 200) {
                container.removeChild(container.firstElementChild);
                content.append(leftWeather(), rightWeather());
                container.insertBefore(content, container.firstElementChild);
                while (weatherDisplay.hasChildNodes()) {
                    weatherDisplay.firstChild.remove()
                }
                showWeather(weatherDisplay); 
            }
        }).catch((e)=> {       
            const elem = errorFunc(e.response.data.error.message);  
            elem.classList.remove('active');
            setTimeout(() => elem.classList.add('active'), 5000);
        })
    })
}