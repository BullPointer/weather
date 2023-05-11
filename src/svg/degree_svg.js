export default function(className, width, height) {
    const imgSvg = document.createElement('Img');
    imgSvg.src = `data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width='${width}' height="${height}" viewBox="0 0 14 14"%3E%3Cg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"%3E%3Ccircle cx="2" cy="2" r="1.5"%2F%3E%3Cpath d="M13.5 1.84a6 6 0 1 0-2 11.66a6 6 0 0 0 2-.34"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E`;
    imgSvg.classList.add(className);
    return imgSvg;
}



