import './album-item.js';

class ArtistPage extends HTMLElement {

    constructor() {
        super();
        this._data = {};
    }

    connectedCallback() {
        this.render();
    }

    set artistData(objData) {
        this._data.artist_id = objData.id_artist;
        this._data.artist = objData.artist;
        this._data.cover = objData.cover;
    }

    set albumsData(objData) {
        this._data.albums = objData;
    }

    render() {
        this.innerHTML = `
        <div class="row mt-5 mb-3 breadcumbContainerParent">
            <div id="breadcumbContainer" class="bg-white shadow-sm border border-1 rounded">
                <nav class="pt-3" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a class="search-result-anchor" href="#">Search result</a></li>
                        <li class="breadcrumb-item active" aria-current="page">${this._data.artist}</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row mt-2 d-flex justify-content-center">
            <div class="bg-white card h-100 col-md-4 col-6 shadow-sm artist-banner">
                <img src="${this._data.cover}" class="img-fluid" alt="${this._data.artist}">
                <div class="card-body">
                    <h4 style="text-align: center;" class="card-title">${this._data.artist}</h4>
                </div>
            </div>
            <div class="col-md-8 mt-2">
                <hr class="shadow divider">
                <h5 style="color: rgb(95, 74, 190);text-align:center;">Albums : </h5>
                <div id="albums" class="mt-3 row row-cols-2 row-cols-md-3 g-4">
                    
                </div>
            </div>
        </div>
        `;

        this._data.albums.forEach((album) => {
            album.artist = this._data.artist;
            album.artistId = this._data.artist_id;
            let albumElement = document.createElement("album-item");
            albumElement.albumData = album;
            this.querySelector("#albums").appendChild(albumElement);
        });


    }
}


customElements.define("artist-page", ArtistPage);