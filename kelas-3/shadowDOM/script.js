const DOMReal = document.getElementById("DOMReal");
const DOMShadow = document.getElementById("DOMShadow");

const shadowRoot = DOMShadow.attachShadow({
    mode: "open",
});

const heading = document.createElement("h1");
heading.innerText = "DOMShadow";

const sytleInShadow = document.createElement("style");
sytleInShadow.innerText = `
h1{
    color: red;
}
`;

shadowRoot.appendChild(
    heading
);

shadowRoot.appendChild(
    sytleInShadow
);

import CustomImage from './module/custom-image.js';
customElements.define('custom-image', CustomImage);

let figure2 = document.createElement("custom-image");
figure2.setAttribute("src", "https://glot.io/static/img/kotlin.svg?etag=7CCl1_0q");
figure2.setAttribute("alt", "Bahasa Kotlin");
figure2.setAttribute("caption", "Bahasa Kotlin");

DOMReal.appendChild(figure2);
