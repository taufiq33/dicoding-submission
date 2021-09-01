import {Data} from '../api/Data.js';
import $ from 'jquery';
import {attachSongDetailEvent, attachArtistDetailEvent, preventDefaultAnchorTag} from './helper/helper-view.js';
import {getSongDetail, getArtistDetail} from './single-page.js';
import spinner from '../../assets/images/103.gif';

const main = () => {
    const searchBarElement = document.querySelector("search-bar");
    const searchResultContainer = document.querySelector("search-lists");
    const filterFormElement = document.querySelector("filter-form");
    const spinnerElement = document.querySelector(".spinner-loader");

    spinnerElement.src = spinner;
    $('.loader').hide();

    const loadDefaultData = async () => {
        searchResultContainer.typeLists = 'track'; //default front page
        $('.loader').show();
        try {
            let result = await Data.getRandomSongRelatedPadi();
            console.log(result);
            renderResultToDOM(result);
        } catch (error) {
            console.log(error);
            renderError(error);
        }
    }

    const requestSearch = async () => {
        if(searchBarElement.value == '') { return; }
        $('.loader').show();
        try {
            let result = await Data.search(searchBarElement.value, filterFormElement.value.type, filterFormElement.value.lyricOnly);
            renderResultToDOM(result);
        } catch (error) {
            console.log(error);
            renderError(error);
        }
    }

    const eventWhenClicked = () => {
        searchResultContainer.typeLists = filterFormElement.value.type;
        requestSearch();
    }

    const renderResultToDOM = (result) => {
        console.log("sampai sini");
        searchResultContainer.innerHTML =  ``;
        searchResultContainer.dataLists = result;
        preventDefaultAnchorTag();
        if(searchResultContainer.type == "track") {
            attachSongDetailEvent(getSongDetail);
        } else {
            attachArtistDetailEvent(getArtistDetail);
        }
        console.log("sampai sini juga");
        $('.loader').hide();
    }

    const renderError = (message) => {
        searchResultContainer.errormessage = message;
        preventDefaultAnchorTag();
        $('.loader').hide();
    }
    
    searchBarElement.clickEvent = eventWhenClicked;
    $("#search-input").on('keyup', (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            eventWhenClicked();
        }
    });
    document.querySelector("#artistOnly").addEventListener('click', () => eventWhenClicked());
    document.querySelector("#songOnly").addEventListener('click', () => eventWhenClicked());
    document.querySelector("#lyricOnly").addEventListener('click', () => eventWhenClicked());

    setTimeout(() => {
        $('.loader').show();
        loadDefaultData();
    }, 1000)
}

export default main;