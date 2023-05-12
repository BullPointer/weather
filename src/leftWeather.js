import { getApi } from './api/fetchApi';
import { weatherDivOne, degreeFuncLeft } from './weatherDiv';
import cloudImg from './image/cloudImg';
import dayjs from 'dayjs';

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
            weatherDivOne(
                dayjs(res.current.last_updated).format('MMM, ddd D h:mm A'),
                'date', 'left'),
            weatherDivOne(res.location.country, 'place', 'left'),
            degreeFuncLeft(res.current.temp_c, 'degree', 'leftDegree', '40'),
            cloudImg('leftCloud', res.current.condition.icon),
            searchWether(),
        );
    });
    return elem;
}