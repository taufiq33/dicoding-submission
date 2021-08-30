class Navbar extends HTMLElement {
    renderHTML() {
        this.innerHTML = `
        <nav class="shadow navbar navbar-expand-lg navbar-light p-2">
        <div class="container">
            <a class="text-white navbar-brand" href="#"> <i>MusicCatalog.app </i></a>
            <button class="text-white navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="text-white">&#9776;</span>
            </button>
            <div class="text-white collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="text-white navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="text-white nav-item">
                        <a class="text-white nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="text-white nav-item">
                        <a class="text-white nav-link" href="#">Song</a>
                    </li>
                    <li class="text-white nav-item">
                        <a class="text-white nav-link" href="#">Album</a>
                    </li>
                    <li class="text-white nav-item">
                        <a class="text-white nav-link" href="#">Artist</a>
                    </li>
                    <li class="text-white nav-item">
                        <a class="text-white nav-link" href="#"> Search</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
        `;
    }

    connectedCallback() {
        this.renderHTML();
    }
}

customElements.define("app-navbar", Navbar);