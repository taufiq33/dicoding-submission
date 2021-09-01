class SearchArtistItem extends HTMLElement {

    constructor() {
        super();
    }

    set artistData(artistData) {
        this._artistData = artistData;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.classList.add("col");
        this.innerHTML = `
        <div class="card h-100 shadow">
            <img src="${this._artistData.cover}"
                class="card-img-top img-link" alt="${this._artistData.artist}">
            <div class="card-body">
                <a href="" class="artist-item album-title" data-artist-id="${this._artistData.id_artist}"><h5 class="card-title">${this._artistData.artist}</h5></a>
            </div>
        </div>
        `;
        this.querySelector('.img-link').addEventListener('click', () => {
            this.querySelector('.artist-item').firstChild.click();
        })
        this.addEventListener('click', () => {
            this.querySelector('.artist-item').firstChild.click();
        });
    }
}

customElements.define("search-artist-item", SearchArtistItem);