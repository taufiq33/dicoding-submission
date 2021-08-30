class AlbumItem extends HTMLElement {

    constructor(){
        super();
    }

    set albumData (albumData) {
        this._albumData = albumData;
    }
    
    connectedCallback(){
        this.render();
    }

    render() {
        this.classList.add("col");
        this.innerHTML = `
        <div class="card h-100 shadow">
            <img src="${this._albumData.cover }"
                class="card-img-top img-link" alt="${this._albumData.album}">
            <div class="card-body">
                <a href="" class="album-title" data-artist-id="${this._albumData.artistId}" data-artist="${this._albumData.artist}" data-album-cover="${this._albumData.cover }" data-album-id="${this._albumData.id_album}" data-album="${this._albumData.album}" data-realease="reqnew" data-label="reqnew"  href="""><h5 class="card-title">${this._albumData.album}</h5></a>
            </div>
        </div>
        `;
        this.querySelector('.img-link').addEventListener('click', () => {
            this.querySelector('.album-title').firstChild.click();
        })
    }
}

customElements.define("album-item", AlbumItem);