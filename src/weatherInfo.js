import showHour from "./showHour";
import showWeather from "./showWeather";


const weather = [showWeather, showHour]
export default function () {
    const elem = document.querySelector('.weatherDisplay');
    const button = document.querySelectorAll('.button');
    weather[0](elem);
    for (let index = 0; index < button.length; index++) {

        button[index].addEventListener('click', () => {
            while (elem.hasChildNodes()) {
                elem.firstChild.remove()
            }
            return weather[index](elem);

        });   
    }
}