
export default () => {
    let loop = 0;
    const right = document.querySelector('.right-arrow');
    const left = document.querySelector('.left-arrow');

    left.addEventListener('click', ()=> {
        const loopContainer = document.querySelectorAll('.loopContainer');

        if (loop <= 0) loop = loopContainer.length;  
        loop--; 
        for (let index = 0; index < loopContainer.length; index++) {
        loopContainer[index].classList.remove('active');
        }
        loopContainer[loop].classList.add('active');
    });

    right.addEventListener('click', ()=> {
        const loopContainer = document.querySelectorAll('.loopContainer');

        if (loop >= loopContainer.length-1) loop = -1; 
        loop++;
        for (let index = 0; index < loopContainer.length; index++) {
            loopContainer[index].classList.remove('active');
        }
        loopContainer[loop].classList.add('active');
    });
}