import dayjs from "dayjs";
import { getDailyApi } from "./api/fetchApi";
import { degreeFunc } from "./weatherDiv";
import cloudImg from "./image/cloudImg";
import errorFunc from "./errorFunc";

function weather(txt, className) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.textContent = txt;
    return elem;
}
function accordContainer(forecastday, index, className) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.append(
        weather(
            dayjs(forecastday[index].date).format('dddd'), 'day',
        ),
        degreeFunc(
            forecastday[index].day.avgtemp_c, 
            'avg-degree', 
            'accord', 
            '15'
        ),
        degreeFunc(
            forecastday[index].day.maxtemp_c, 
            'max-degree', 
            'accord', 
            '20'
        ),
        degreeFunc(
            forecastday[index].day.mintemp_c, 
            'min-degree', 
            'accord', 
            '10'
        ), 
        cloudImg('cloud-img', forecastday[index].day.condition.icon)
    )
    return elem;
}

export default function(elem) {
    const country = localStorage.getItem('country');
    const link = 'https://api.weatherapi.com/v1/forecast.json';
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    leftArrow.classList.remove('arrow');
    rightArrow.classList.remove('arrow');

    getDailyApi(link, country, '7').then((res) => {
        const { forecastday } = res.data.forecast;
        for (let index = 0; index < forecastday.length; index++) {
            elem.appendChild(
                accordContainer(forecastday, index, 'forcast')
            );
        }
    }).catch(() => {
        const elem = errorFunc(e.response.data.error.message);  
        elem.classList.remove('active');
        setTimeout(() => elem.classList.add('active'), 5000);
    })
}