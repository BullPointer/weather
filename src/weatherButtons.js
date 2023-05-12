import weatherInfo from "./weatherInfo";
import createDiv from "./createDiv";

function button(txt) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = txt
    weatherInfo(button);
    return button;
}

function weatherBox(className) {
    const elem = document.createElement('div');
    elem.classList.add('weatherBox');
    elem.appendChild(createDiv('weatherDisplay'));
    return elem;
}

export default function() {
    const box = document.createElement('div');
    box.classList.add('box');
    box.append(
        button('Daily'), 
        button('Hourly'), 
        createDiv('weatherDisplay')
    );
    return box;
}