import './search-song-item.js';
import './search-artist-item.js';

class SearchLists extends HTMLElement {

    constructor(){
        super();
        this._dataList = [];
        this._type = "track"; // default value
    }

    set typeLists (type) {
        this._type = type;
        this.innerHTML = ``;
    }

    get type () {
        return this._type;
    }

    set dataLists (dataListsArray) {
        this._dataList = dataListsArray;
        this.render();
    }

    set errormessage (message) {
        this.innerHTML = ``;
        this.innerHTML = `<h4 class="col">Sorry, ${message} </h4>`;
    }
    
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = ``;
        this.className = ``;
        this._type === "track" ? this.classList.add("container","mt-1") : this.classList.add("mt-1", "row", "row-cols-2", "row-cols-md-3", "g-4");
        
        if(this._dataList.length > 0) {
            if(this._type == 'track') {
                this._dataList.forEach((data) => {
                    let itemElement = document.createElement("search-song-item");
                    itemElement.songData = data;
                    this.appendChild(itemElement);
                })
            } else if(this._type == 'artist') {
                this._dataList.forEach((data) => {
                    let itemElement = document.createElement("search-artist-item");
                    itemElement.artistData = data;
                    this.appendChild(itemElement);
                })
            }   
        }
    }
}

customElements.define("search-lists", SearchLists);