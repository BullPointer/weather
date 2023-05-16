import { getApi } from './api/fetchApi';
import { weatherDivOne, degreeFuncLeft } from './weatherDiv';
import cloudImg from './image/cloudImg';
import dayjs from 'dayjs';
import createDiv from './createDiv';
import search_svg from './svg/search_svg';
import searchSubmit from './searchSubmit';
import errorFunc from './errorFunc';


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
    const link = 'https://api.weatherapi.com/v1/current.json';
    var country = localStorage.getItem("country");
    const elem = document.createElement('div');
    elem.classList.add('left-weather');
    getApi(link, country).then((res) => {
        elem.append(
            weatherDivOne('Remedy Weather', 'title', 'left'),
            weatherDivOne(
                dayjs(res.data.current.last_updated).format('MMM, ddd D h:mm A'),
                'date', 'left'),
            weatherDivOne(res.data.location.country, 'place', 'left'),
            degreeFuncLeft(res.data.current.temp_c, 'degree', 'leftDegree', '40'),
            cloudImg('leftCloud', res.data.current.condition.icon),
            searchWether(),
        );
        searchSubmit();
    }).catch((e) => { 
        const elem = errorFunc(e.response.data.error.message);  
        elem.classList.remove('active');
        setTimeout(() => elem.classList.add('active'), 5000);
    });
    return elem;
}