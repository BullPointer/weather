import { getApi } from './api/fetchApi';
import { degreeFuncRight, weatherDivTwo } from './weatherDiv';

const link = 'http://api.weatherapi.com/v1/current.json';

export default function() {
    var country = localStorage.getItem("country");
    const elem = document.createElement('div');
    elem.classList.add('right-weather');

    getApi(link, country).then((res) => {
        elem.append(
            degreeFuncRight(
                'Feels like', 'more-msg',
                res.current.feelslike_c, 'in-degree', 
                'right', 'rightDegree', '30'
            ),

            weatherDivTwo(
                'right',  
                'Humidity', 'more-msg',
                `${res.current.humidity}%`, 'in-degree'
            ),
            weatherDivTwo(
                'right',  
                'Wind Speed', 'more-msg',
                `${res.current.wind_kph}km/h`, 'in-degree'
            ),
            degreeFuncRight(
                'Wind Degree', 'more-msg',
                res.current.wind_degree, 'in-degree', 
                'right', 'rightDegree', '30'
            ),
        );
    });
    return elem;
}