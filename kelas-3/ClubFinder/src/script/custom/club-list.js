class ClubList extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }

    static css () {
        return `
            <style>

            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            </style>
        `;
    }

    set list(listObject) {
        this._list = listObject;
        this.render();
    }

    fallbackError(message){
        this._shadowRoot.innerHTML = '';
        this._shadowRoot.innerHTML += ClubList.css();
        this._shadowRoot.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
    }

    render() {
        this._shadowRoot.innerHTML = '';
        this._shadowRoot.innerHTML += ClubList.css();
        this._list.forEach(element => {
            let clubElement = document.createElement("club-item");
            clubElement.club = element;
            this._shadowRoot.appendChild(clubElement);
        });
    }
}

customElements.define("club-list", ClubList);