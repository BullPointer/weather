import createDiv from "./createDiv";

export default function(msg) {
     const container = document.querySelector('.container');
     const errorBox = createDiv('error-box');
     const errorMsg = createDiv('error-msg');
     errorMsg.textContent = msg
     errorBox.appendChild(errorMsg);
     container.appendChild(errorBox);
     return errorBox;
}