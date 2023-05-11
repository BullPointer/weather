import _ from 'lodash';
import './style.css';
import rightWeather from './rightWeather';
import leftWeather from './leftWeather';

class Container {

    weatherDiv = () => {
        const elem = document.createElement('div');
        elem.classList.add('container');
        elem.append(leftWeather(), rightWeather());
        return elem;
    }
}

const container = new Container();
document.body.appendChild(container.weatherDiv());
