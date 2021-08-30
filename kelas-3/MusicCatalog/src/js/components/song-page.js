class SongPage extends HTMLElement {
    constructor() {
        super();
        this._data = [];
    }

    connectedCallback() {
        this.render();
    }

    set songDetail (songDetailObj) {
        this._data = songDetailObj;
    }

    set artistData (artistData) {
        this._data.artistData = artistData;
    }

    set albumData (albumData) {
        this._data.albumData = albumData;
    }

    set lyric (lyricData) {
        this._data.lyric = lyricData.replaceAll('\n', '<br>');
    }

    render() {
        this.innerHTML = `
        <div class="row mt-5">
            <div id="breadcumbContainer" class="shadow-sm border border-1 rounded bg-white">
                <nav class="pt-3" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item search-result-anchor"><a href="#">Search result</a></li>
                        <li class="breadcrumb-item" aria-current="page"><a class="artist-item" data-artist-id="${this._data.artistData.id_artist}" href="">${this._data.artist}</a></li>
                        <li class="breadcrumb-item" aria-current="page"><a class="album-title" data-artist-id="${this._data.artistData.id_artist}" data-artist="${this._data.albumData.artist}" data-album-id="${this._data.albumData.id_album}" data-album-cover="${this._data.albumData.cover}"  data-album="${this._data.albumData.album}" data-realease="${this._data.albumData.realease}" data-label="${this._data.albumData.label}" href="#">${this._data.album}</a></li>
                        <li class="breadcrumb-item active" aria-current="page">${this._data.track}</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-8">
                <div class="row">
                    <div class="col">
                        <h3 style="color: rgb(95, 74, 190);" class="mb-3">${this._data.track}</h3>
                        <table class="table table-bordered shadow-sm bg-white table-hover">
                            <tr>
                                <th scope="col">Artist</th>
                                <td>${this._data.artist}</td>
                            </tr>
                            <tr>
                                <th scope="col">Album</th>
                                <td>${this._data.album} ${this._data.albumData.realease == "" ? "" : '(' + ((new Date(this._data.albumData.realease)).getFullYear()) + ')' }</td>
                            </tr>
                            <tr>
                                <th scope="col">Bit per Minute</th>
                                <td>${this._data.bpm == false ? "-" : this._data.bpm}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="row mt-4 mb-4">
                    <h3 style="color: rgb(95, 74, 190);">Lyric</h3>
                    <p class="fw-light bg-white p-2 fst-italic text-secondary">
                    ${this._data.lyric}
                    </p>
                </div>
            </div>
            <div class="sidebar-song-page col-md-4">
                <div class="row mt-2 d-flex justify-content-center">
                    <div class="card col-md-6 col-6 shadow">
                        <img src="${this._data.artistData.cover}" class="img-link img-fluid"
                            alt="...">
                        <div class="card-body">
                            <h5 style="text-align: center;" class="card-title"> Artist : <a class="artist-item" data-artist-id="${this._data.artistData.id_artist}" href="">${this._data.artist}</a> </h5>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 d-flex justify-content-center">
                    <div class="card col-md-6 col-6 shadow">
                        <img src="${this._data.albumData.cover}" class="img-link img-fluid"
                            alt="...">
                        <div class="card-body">
                            <h5 style="text-align: center;" class="card-title"> Album : <a class="album-title" data-artist-id="${this._data.artistData.id_artist}" data-artist="${this._data.albumData.artist}" data-album-cover="${this._data.albumData.cover}" data-album-id="${this._data.albumData.id_album}" data-album="${this._data.albumData.album}" data-realease="${this._data.albumData.realease}" data-label="${this._data.albumData.label}"  href="">${this._data.album}</a> </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.querySelectorAll(".img-link").forEach((element) => {
            element.addEventListener('click', (event) => {
                let elemToClick = event.target.parentElement.querySelector('.artist-item') || event.target.parentElement.querySelector('.album-title');
                elemToClick.click();
            });
        })
    }
}


customElements.define("song-page", SongPage);