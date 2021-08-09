import ArticleElement from './article/article-element.js';

customElements.define("article-element", ArticleElement);

class AlbumList extends HTMLElement {
    constructor(){
        super();
        console.log("CONSTRUCTOR BRO!");
    }

    set list (arrList){
        this._list = arrList;
        this.render();
    }

    render(){
        this._list.forEach((value) => {
            let album = document.createElement('article-element');
            album.article = value;
            this.appendChild(album);
        })
    }
}

export default AlbumList;