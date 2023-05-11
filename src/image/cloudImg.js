
export default function(className, link) {
    const img = document.createElement('Img');
    img.src = `https:${link}`;
    img.classList.add(className);
    return img;
}