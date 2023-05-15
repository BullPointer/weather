import click from "./click";
import createDiv from "./createDiv";


function addLoopContainer(elem, newArr, accordContainer) {
    let index = 0;
    while ( index < newArr.length) {
        const container = createDiv('loopContainer');
        for (let i = 0; i < newArr.length; i++) {
            container.appendChild(
                accordContainer(newArr[i], index, 'day-forcast')
            );
        }
        elem.appendChild(container);
        index++
        elem.firstChild.classList.add('active');
    }
}
export function displayHour(elem, arr, accordContainer) {

    const newArr = [];
    const num = Math.ceil(arr.length/4);

    click();
    while (newArr.length < num) {
        let count = 0;
        const list = arr.splice(count, 4);
        newArr.push(list);
        count+=4;
    }

    addLoopContainer(elem, newArr, accordContainer);
}