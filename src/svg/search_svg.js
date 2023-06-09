export default function(className, width, height) {
    const imgSvg = document.createElement('Img');
    imgSvg.src = `data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width='${width}' height="${height}" viewBox="0 0 24 24"%3E%3Cpath fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"%2F%3E%3C%2Fsvg%3E`;
    imgSvg.classList.add(className);
    return imgSvg;
}