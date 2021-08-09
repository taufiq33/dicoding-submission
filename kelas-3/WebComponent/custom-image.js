export default class CustomImage extends HTMLElement{
    constructor(){
        super();
        console.log("Constructed");
    }

    render() {
        this.src = this.getAttribute("src") || "";
        this.caption = this.getAttribute("caption") || "";
        this.alt = this.getAttribute("alt") || "";

        this.innerHTML = `
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