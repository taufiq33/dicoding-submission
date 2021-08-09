export default class CustomImage extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "open"})
        console.log("Constructed");
    }

    render() {
        this.src = this.getAttribute("src") || "";
        this.caption = this.getAttribute("caption") || "";
        this.alt = this.getAttribute("alt") || "";

        this._shadowRoot.innerHTML = `
        <style>
            figure{
                border: 3px solid teal;
                display: inline-block;
                padding: 5px;
                border-radius: 10px;
            }
        </style>
        <figure>
            <img src="${this.src}"
                alt="${this.alt}">
            <figcaption>${this.caption}</figcaption>
        </figure>
        `;
    }

    connectedCallback(){
        console.log("Connected!");
        this.render();
    }

    disconnectedCallback(){
        console.log("Disconnected");
    }

    adoptedCallback(){
        console.log("Adopted");
    }

    attributeChangedCallback(name, oldValue, newValue){
        console.log(`Attribute ${name} berubah nilanya menjadi ${newValue} , yang sebelumnya adalah ${oldValue}`);
        this[name] = newValue;
        this.render();
    }

    static get observedAttributes(){
        return ["src", "caption", "alt"];
    }
}