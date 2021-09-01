class SearchSongItem extends HTMLElement {

    constructor() {
        super();
    }

    set songData(songData) {
        this._songData = songData;
    }

    connectedCallback() {
        this.render();
    }

    render() {

        this.classList.add("card", "shadow", "mb-3", "border", "bg-white", "bg-gradient");
        this.setAttribute("style", `max-width: 700px;cursor: pointer`);
        this.innerHTML = `
            <div class="row g-0">
                <div class="col-md-3 col-6">
                    <img src="${this._songData.cover}"
                        class="img-link img-fluid rounded" alt="${this._songData.track}">
                </div>
                <div class="col-md-9 col-6">
                    <div class="card-body">
                        <a data-artist-id="${this._songData.id_artist}" data-album-id="${this._songData.id_album}" data-song-id="${this._songData.id_track}" class="fw-bold  song-title" href=""><h5 class="card-title">${this._songData.track}</h5></a>
                        <p class="text-body"><span class="text-dark" >${this._songData.artist}</span></p>
                        ${this._songData.haslyrics ? `<span style="background-color: rgb(95, 74, 190); " class="badge rounded-pill float-end">lyric</span>` : ""}
                        <small class="text-muted">${this._songData.album}</small>
                    </div>
                </div>
            </div>
        `;

        this.querySelector('.img-link').addEventListener('click', () => {
            this.querySelector('.song-title').firstChild.click();
        });
        this.addEventListener('click', () => {
            this.querySelector('.song-title').firstChild.click();
        });
    }
}

customElements.define("search-song-item", SearchSongItem);