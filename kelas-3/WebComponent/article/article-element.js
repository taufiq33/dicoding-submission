export default class ArticleElement extends HTMLElement {

    set article(articleObj) {
        this._article = articleObj;
        this.render();
    }

    render() {
        this.innerHTML = `
            <article>
                <figure>
                    <img src="${this._article.imgSrc}">
                    <figcaption>${this._article.title}</figcaption>
                </figure>
                <div>
                    <h2>${this._article.title} (${this._article.year})</h2>
                    <p>${this._article.description}</p>
                </div>
            </article>
        `;
    }
} 