import degreeSvg from "./svg/degree_svg";

export const weatherDivOne = (txt, className, position) => {
    const elem = document.createElement('div');
    elem.classList.add(className, position);
    elem.textContent = txt;
    return elem;
}
export const weatherDivTwo = (
    position,
    txt1, className1, 
    txt2, className2
) => {
    const box = document.createElement('div');
    box.classList.add(position);
    box.append(
        weatherDivOne(txt1, className1), 
        weatherDivOne(txt2, className2)
    );
    return box;
}

export const degreeFuncLeft = (txt, className, position, size) => {
    const box = document.createElement('div');
    box.classList.add(position);
    box.append(
        weatherDivOne(txt, className, 'left'),
        degreeSvg('imgSvg', size, size)
    )
    return box;
}

export const degreeFuncRight = (
    txt1, className1, 
    txt2, className2, 
    position1, position2, size) => {
    const box = document.createElement('div');
    box.classList.add(position1);
    box.append(
        weatherDivOne(txt1, className1, 'right'),
        degreeFuncLeft(txt2, className2, position2, size),
    )
    return box;
}