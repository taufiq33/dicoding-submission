class ClubItem extends HTMLElement {
    constructor(){
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
        :host{
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
            display: block;
        }
        
        :host .fan-art-club {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
        
        .club-info {
            padding: 24px;
        }
        
        .club-info > h2 {
            font-weight: lighter;
        }
        
        .club-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }
        </style>
        `;
    }

    set club (clubObj) {
        this._club = clubObj;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = ClubItem.css();
        this._shadowRoot.innerHTML += `<img class="fan-art-club" src="${this._club.fanArt}" alt="Fan Art">
            <div class="club-info">
            <h2> ${this._club.name} </h2>
            <p> ${this._club.description} </p>
            </div>
        `;
    }
}

customElements.define("club-item", ClubItem);