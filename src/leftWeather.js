import { getApi } from './api/fetchApi';
import { weatherDivOne, degreeFuncLeft } from './weatherDiv';
import cloudImg from './image/cloudImg';

const link = 'http://api.weatherapi.com/v1/current.json';

const searchWether = () => {
    const search = document.createElement('input');
    search.type = 'search';
    search.placeholder = 'Search location';
    search.classList.add('search-location');
    return search;
}

export default function() {
    const elem = document.createElement('div');
    elem.classList.add('left-weather');

    getApi(link, 'usa').then((res) => {
        elem.append(
            weatherDivOne('Remedy Weather', 'title', 'left'),
            weatherDivOne(res.current.last_updated, 'date', 'left'),
            weatherDivOne(res.location.country, 'place', 'left'),
            degreeFuncLeft(res.current.temp_c, 'degree', 'leftDegree', '40'),
            cloudImg('leftCloud', res.current.condition.icon),
            searchWether(),
        );
    });
    return elem;
}