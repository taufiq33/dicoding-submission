import spinner from '../../../assets/images/103.gif';

const appContainer = document.querySelector("#app-container");

const preventDefaultAnchorTag = () => {
    $('a').on("click", (event) => {
        event.preventDefault();
    })
}

const switchToSinglePage = (mode = off) => {
    if (mode == "on") {
        $('#home-container').hide();
        if (appContainer.firstElementChild.classList.contains("loader") == false) {
            $(`<div class="row loader mt-5"></div>`).html(`<p class="text-center">Loading ... <img class="spinner-loader" alt=""></p>`).prependTo(appContainer);
            document.querySelector('.spinner-loader').src = spinner;
        }
        window.scroll(0, 0)
    } else {
        $('#home-container').show();
        appContainer.removeChild(appContainer.firstChild);
        appContainer.removeChild(appContainer.lastChild);
    }
}

const removeContentSinglePage = () => {
    if (appContainer.children.length > 2) {
        appContainer.removeChild(appContainer.lastChild);
    }
    window.scroll(0, 0)
}

const attachSongDetailEvent = (fn) => {
    $('.song-title').on("click", (event) => {
        fn(
            event.target.parentElement.getAttribute('data-artist-id'),
            event.target.parentElement.getAttribute('data-album-id'),
            event.target.parentElement.getAttribute('data-song-id')
        );
    })
}

const attachArtistDetailEvent = (fn) => {
    $('.artist-item').on("click", (event) => {
        fn(event.target.parentElement.getAttribute("data-artist-id") || event.target.getAttribute("data-artist-id"));
    })
}

const attachAlbumDetailEvent = (fn) => {
    $('.album-title').on('click', (event) => {
        fn(
            event.target.parentElement.getAttribute("data-artist-id") || event.target.getAttribute("data-artist-id"),
            event.target.parentElement.getAttribute("data-album-id") || event.target.getAttribute("data-album-id"),
            event.target.parentElement.getAttribute("data-artist") || event.target.getAttribute("data-artist"),
            event.target.parentElement.getAttribute("data-album") || event.target.getAttribute("data-album"),
            event.target.parentElement.getAttribute("data-album-cover") || event.target.getAttribute("data-album-cover"),
            event.target.parentElement.getAttribute("data-realease") || event.target.getAttribute("data-realease"),
            event.target.parentElement.getAttribute("data-label") || event.target.getAttribute("data-label"),
        )
    })
}

export { attachAlbumDetailEvent, attachSongDetailEvent, attachArtistDetailEvent, preventDefaultAnchorTag, switchToSinglePage, removeContentSinglePage, appContainer };