class FilterForm extends HTMLElement {
    constructor(){
        super();
        this.setAttribute("id", "filter-form");
        this.classList.add("col-md-3");
    }

    connectedCallback() {
        this.render();
    }

    get value () {
        return {
            'lyricOnly' : this.querySelector("#lyricOnly").checked ? 1 : 0,
            'type' : this.querySelector('#songOnly').checked ? 'track' : 'artist'
        }
    }

    filterBehavior () {
        if (this.querySelector('#artistOnly').checked){
            this.querySelector("#lyricOnly").disabled = true;
            this.querySelector("#lyricOnly").checked = false;
        } else {
            this.querySelector("#lyricOnly").disabled = false;
        }
    }

    render() {
        this.innerHTML = `
       
            <h6 class="filter-title text-secondary">Filter</h6>
            <hr>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="lyricOnly">
                <label class="form-check-label" for="lyricOnly">
                    Only songs with lyrics
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="songOnly" checked>
                <label class="form-check-label" for="songOnly">
                    Song only
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="artistOnly">
                <label class="form-check-label" for="artistOnly">
                    Artist only
                </label>
            </div>
       
        `;

        this.querySelector("#artistOnly").addEventListener('click', () => this.filterBehavior());
        this.querySelector("#songOnly").addEventListener('click', () => this.filterBehavior());
    }
}

customElements.define("filter-form", FilterForm);