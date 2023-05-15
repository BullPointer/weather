import createDiv from "./createDiv";

function button(txt, className) {
    const button = document.createElement('button');
    button.classList.add(className);
    button.textContent = txt;
    button.name = txt.toLowerCase();
    return button;
}

export default function() {
    const box = document.createElement('div');
    box.classList.add('box');
    box.append(
        button('Daily', 'button'), 
        button('Hourly', 'button'), 
        button('<', 'left-arrow'), 
        button('>', 'right-arrow'), 
        createDiv('weatherDisplay')
    );
    return box;
}