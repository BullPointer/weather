import './style.css';
import './style2.css';
import './style3.css';
import rightWeather from './rightWeather';
import leftWeather from './leftWeather';
import weatherButtons from './weatherButtons';
import createDiv from './createDiv';
import weatherInfo from './weatherInfo';

class Container {
    weatherDiv = () => {
        const elem = createDiv('container');
        const content = createDiv('content');
        content.append(leftWeather(), rightWeather());
        elem.append(content, weatherButtons());
        return elem;
    }
    weather() {
        window.onload = function (e) {
            const country = localStorage.getItem('country');
            if (country === '' || country === 'undefined') {
                localStorage.setItem("country", 'usa');
            }
        };
        window.onscroll = function (e) {
            localStorage.setItem("scrollpos", window.scrollY);
        };
        document.body.appendChild(this.weatherDiv());
        weatherInfo();
    }
}

const container = new Container();
container.weather();

var scrollpos = localStorage.getItem("scrollpos");
if (scrollpos) window.scrollTo(0, scrollpos);