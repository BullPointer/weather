import './style.css';
import './style2.css';
import rightWeather from './rightWeather';
import leftWeather from './leftWeather';
import weatherButtons from './weatherButtons';
import showWeather from './showWeather';
import createDiv from './createDiv';

class Container {
    weatherDiv = () => {
        const elem = createDiv('container');
        const content = createDiv('content');
        content.append(leftWeather(), rightWeather());
        elem.append(content, weatherButtons());
        return elem;
    }
    weather() {
        document.body.appendChild(container.weatherDiv());
        showWeather();

    }
}

const container = new Container();
container.weather();
