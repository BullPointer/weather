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
        console.log(e.response.data.error.message); 
    });
    return elem;
}