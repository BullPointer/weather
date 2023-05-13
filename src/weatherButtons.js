// import weatherInfo from "./weatherInfo";
import createDiv from "./createDiv";

function button(txt) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = txt;
    button.name = txt.toLowerCase();
    // weatherInfo(button);
    return button;
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