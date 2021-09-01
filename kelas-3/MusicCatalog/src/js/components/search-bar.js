class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.setAttribute("id", "search-bar");
        this.classList.add("row");
    }

    connectedCallback() {
        this.render();
    }

    get value() {
        return this.querySelector("#search-input").value;
    }

    set clickEvent(clickEventFn) {
        this._clickEvent = clickEventFn;
        this.render();
    }

    clickDefaultEvent() {
        console.info("This is default click event");
    }

    render() {
        this.innerHTML = `
       
        <div class="col-md-7 col-8">
            <input id="search-input" class="shadow form-control" type="search" placeholder="Search songs, artist...">
        </div>
        <div class="col-md-5 col-4">
            <button id="search-btn" class="text-white btn shadow" style="background-color: rgb(95, 74, 190); ">Search</button>
        </div>
       
        `;
        this.querySelector("#search-btn").addEventListener('click', this._clickEvent || this.clickDefaultEvent);
    }
}

customElements.define("search-bar", SearchBar);