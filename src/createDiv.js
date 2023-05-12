

export default function(className) {
    const elem = document.createElement('div');
    elem.classList.add(className);
    return elem;
}