import {Data} from '../api/Data.js';
import $ from 'jquery';
import {
    attachSongDetailEvent,
    attachArtistDetailEvent,
    attachAlbumDetailEvent,
    preventDefaultAnchorTag,
    switchToSinglePage,
    removeContentSinglePage,
    appContainer} from './helper/helper-view.js';
import './../components/song-page.js';
import './../components/album-page.js';
import './../components/artist-page.js';

const getSongDetail = async (id_artist, id_album, id_track) => {
    $('.loader').show();
    let result = await Data.getSong(id_artist, id_album, id_track);
    let lyric = result.haslyrics ? await Data.getLyric(id_artist, id_album, id_track) : "Not Available";
    let artist = await Data.getArtist(id_artist);
    let album = await Data.getAlbum(id_artist, id_album);
    switchToSinglePage("on");
    renderSongPage(result, lyric, artist, album);
}

const getArtistDetail = async (id_artist) => {
    $('.loader').show();
    let result = await Data.getArtist(id_artist);
    let albums = await Data.getAlbums(id_artist);
    switchToSinglePage("on");
    renderArtistPage(result, albums);
}

const renderArtistPage = (artistData, albums) => {
    removeContentSinglePage();
    let artistPageElement = document.createElement("artist-page");
    artistPageElement.artistData = artistData;
    artistPageElement.albumsData = albums.albums;
    appContainer.appendChild(artistPageElement);
    preventDefaultAnchorTag();
    $('.search-result-anchor').on('click', () => {
        switchToSinglePage("off");
    });
    attachAlbumDetailEvent(renderAlbumPage);
    $('.loader').hide();
}

const renderSongPage = (songData, lyricData, artistData, albumData) => {
    removeContentSinglePage();
    let songPageElement = document.createElement('song-page');
    songPageElement.songDetail = songData;
    songPageElement.lyric = lyricData.lyrics || "Not Available" ;
    songPageElement.artistData = artistData;
    songPageElement.albumData = albumData;
    appContainer.appendChild(songPageElement);
    preventDefaultAnchorTag();
    $('.search-result-anchor').on('click', () => {
        switchToSinglePage("off");
    });
    attachAlbumDetailEvent(renderAlbumPage);
    attachArtistDetailEvent(getArtistDetail);
    $('.loader').hide();
}

const renderAlbumPage = async(id_artist, id_album, artist, album, cover_album, realease, label) => {
    removeContentSinglePage();
    $('.loader').show();
    if(realease == 'reqnew' || label == 'reqnew') {
        let album = await Data.getAlbum(id_artist, id_album);
        realease = album.realease;
        label = album.label;
    }
    let tracks = await Data.getTracksAlbum(id_artist, id_album);
    let albumPageElement = document.createElement('album-page');
    albumPageElement.albumData = {
        "data_artist_id" : id_artist,
        "data_album_id" : id_album,
        "data_artist" : artist,
        "data_album" : album,
        "data_album_cover" : cover_album,
        "data_realease" : realease,
        "data_label" : label,
        "data_tracks" : tracks.tracks,
    }
    appContainer.appendChild(albumPageElement);
    preventDefaultAnchorTag();
    attachSongDetailEvent(getSongDetail);
    attachArtistDetailEvent(getArtistDetail);
    $('.search-result-anchor').on('click', () => {
        switchToSinglePage("off");
    })
    $('.loader').hide();
}

export {
    getSongDetail,
    getArtistDetail
}