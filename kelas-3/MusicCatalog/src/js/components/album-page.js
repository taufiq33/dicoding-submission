import './search-song-item.js';

class AlbumPage extends HTMLElement {

    constructor() {
        super();
        this._data = {};
    }

    connectedCallback() {
        this.render();
    }

    set albumData(objData) {
        this._data.data_realease = "";
        if (objData.data_realease) {
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            let realease = new Date(objData.data_realease);
            this._data.data_realease = realease.toLocaleDateString("en-US", options);
        }
        this._data.data_artist_id = objData.data_artist_id;
        this._data.data_album_id = objData.data_album_id;
        this._data.data_artist = objData.data_artist;
        this._data.data_album = objData.data_album;
        this._data.data_album_cover = objData.data_album_cover;
        this._data.data_label = objData.data_label || "-";
        this._data.data_tracks = objData.data_tracks;
    }

    render() {
        this.innerHTML = `
        <div class="row mt-5 mb-3 breadcumbContainerParent">
            <div id="breadcumbContainer" class="shadow-sm border border-1 rounded bg-white">
                <nav class="pt-3" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item search-result-anchor"><a href="#">Search result</a></li>
                        <li class="breadcrumb-item" aria-current="page"><a class="artist-item" data-artist-id="${this._data.data_artist_id}" href=""> ${this._data.data_artist}</a></li>
                        <li class="breadcrumb-item active" aria-current="page">${this._data.data_album}</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row mt-2 d-flex justify-content-center">
            <div class="card h-100 col-md-4 col-8 shadow-sm album-banner">
                <img src="${this._data.data_album_cover}" class="img-fluid" alt="${this._data.data_album}">
                <div class="card-body">
                    <h4 style="text-align: center;" class="card-title">${this._data.data_album} by <a class="artist-item" data-artist-id="${this._data.data_artist_id}" href="">${this._data.data_artist}</a></h4>
                </div>
            </div>
            <div class="col-md-8 mt-2">
                <h5 style="text-align: center; color: rgb(95, 74, 190);">Album details : </h5>
                <div class="row mb-3">
                    <div class="col">
                        <table class="table table-bordered shadow-sm bg-white table-hover">
                            <tr>
                                <th scope="col">Artist</th>
                                <td> ${this._data.data_artist}</td>
                            </tr>
                            <tr>
                                <th scope="col">Album</th>
                                <td>${this._data.data_album}</td>
                            </tr>
                            <tr>
                                <th scope="col">Realease</th>
                                <td>${this._data.data_realease || "-"}</td>
                            </tr>
                            <tr>
                                <th scope="col">Label</th>
                                <td>${this._data.data_label}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <h5 style="color: rgb(95, 74, 190);text-align:center;">Album tracks : </h5>
                <div class="row">
                    <div class="container"></div>
                </div>
            </div>
        </div>
        `;

        this._data.data_tracks.forEach((track) => {
            track.cover = this._data.data_album_cover;
            track.album = this._data.data_album;
            track.artist = this._data.data_artist;
            track.id_artist = this._data.data_artist_id;
            track.id_album = this._data.data_album_id;
            let trackElement = document.createElement("search-song-item");
            trackElement.songData = track;
            this.querySelector(".container").appendChild(trackElement);
        })
    }
}


customElements.define("album-page", AlbumPage);