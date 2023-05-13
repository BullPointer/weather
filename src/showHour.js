import dayjs from "dayjs";
import { getDailyApi } from "./api/fetchApi";
import { degreeFunc } from "./weatherDiv";
import cloudImg from "./image/cloudImg";

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
    const link = 'http://api.weatherapi.com/v1/forecast.json';
    const elem = document.querySelector('.weatherDisplay');
    getDailyApi(link, 'lagos', '7').then((res) => {
        const { hour } = res.forecast.forecastday[0];
        console.log(hour);
        for (let index = 0; index < hour.length; index++) {
            elem.appendChild(
                accordContainer(hour, index, 'forcast')
            );
        }
    })
}