import dayjs from "dayjs";
import { getDailyApi } from "./api/fetchApi";
import { degreeFunc } from "./weatherDiv";
import cloudImg from "./image/cloudImg";
import { displayHour } from "./toggle";


function weather(txt, className) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.textContent = txt;
    return elem;
}
function accordContainer(hour, index, className) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    elem.append(
        weather(
            dayjs(hour[index].time).format('h:mm A'), 'day',
        ),
        degreeFunc(
            hour[index].temp_c, 
            'avg-degree', 
            'accord', 
            '15'
        ), 
        cloudImg('cloud-img', hour[index].condition.icon)
    )
    return elem;
}

export default function() {
    const country = localStorage.getItem('country');
    const link = 'http://api.weatherapi.com/v1/forecast.json';
    const elem = document.querySelector('.weatherDisplay');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    leftArrow.classList.add('arrow');
    rightArrow.classList.add('arrow');

    getDailyApi(link, country, '7').then((res) => {
        const { hour } = res.data.forecast.forecastday[0];
        displayHour(elem, hour, accordContainer);
        
    }).catch(() => {})
}