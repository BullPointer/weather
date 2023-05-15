import { getApi } from './api/fetchApi';
import { weatherDivOne, degreeFuncLeft } from './weatherDiv';
import cloudImg from './image/cloudImg';
import dayjs from 'dayjs';
import createDiv from './createDiv';
import search_svg from './svg/search_svg';
import searchSubmit from './searchSubmit';

const link = 'http://api.weatherapi.com/v1/current.json';

const searchWether = () => {
    const seachBox = createDiv('search-box');
    const search = document.createElement('input');
    search.type = 'search';
    search.placeholder = 'Search location';
    search.classList.add('search-location');
    seachBox.append(search, search_svg('search-btn', '24', '24'));
    return seachBox;
}

export default function() {
    var country = localStorage.getItem("country");
    const elem = document.createElement('div');
    elem.classList.add('left-weather');
    getApi(link, country).then((res) => {
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
        searchSubmit();
    });
    return elem;
}