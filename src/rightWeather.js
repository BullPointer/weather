import { getApi } from './api/fetchApi';
import { degreeFuncRight, weatherDivTwo } from './weatherDiv';
import errorFunc from './errorFunc';

export default function() {
    const link = 'https://api.weatherapi.com/v1/current.json';
    var country = localStorage.getItem("country");
    const elem = document.createElement('div');
    elem.classList.add('right-weather');

    getApi(link, country).then((res) => {
        elem.append(
            degreeFuncRight(
                'Feels like', 'more-msg',
                res.data.current.feelslike_c, 'in-degree', 
                'right', 'rightDegree', '30'
            ),

            weatherDivTwo(
                'right',  
                'Humidity', 'more-msg',
                `${res.data.current.humidity}%`, 'in-degree'
            ),
            weatherDivTwo(
                'right',  
                'Wind Speed', 'more-msg',
                `${res.data.current.wind_kph}km/h`, 'in-degree'
            ),
            degreeFuncRight(
                'Wind Degree', 'more-msg',
                res.data.current.wind_degree, 'in-degree', 
                'right', 'rightDegree', '30'
            ),
        );
    }).catch((e) => {
        const elem = errorFunc(e.response.data.error.message);  
        elem.classList.remove('active');
        setTimeout(() => elem.classList.add('active'), 5000); 
    });
    return elem;
}