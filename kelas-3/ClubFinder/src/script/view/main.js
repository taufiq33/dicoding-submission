import DataSource from './../data/data-source.js';

const main = () => {
    // const searchElement = document.querySelector("#searchElement");
    const searchBar = document.querySelector("search-bar");
    // const buttonSearchElement = document.querySelector("#searchButtonElement");
    
    // const clubListElement = document.querySelector("#clubList");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = async () => {
        try {
            const dataSource = await DataSource.searchClub(searchBar.value);
            renderResult(dataSource);
        } catch (error) {
            fallbackResult(error);
        }  
    };

    const renderResult = (results) => {
        
        clubListElement.innerHTML = "";
        clubListElement.list = results;
        // results.forEach( (club) => {
        //     // const name = club.name;
        //     // const fanArt = club.fanArt;
        //     // const description = club.description;

        //     const {name, fanArt, description} = club;

        //     const clubElement = document.createElement("div");
        //     clubElement.setAttribute("class", "club");

        //     // clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
        //     //     '<div class="club-info">\n' +
        //     //     '<h2>' + name + '</h2>\n' +
        //     //     '<p>' + description + '</p>' +
        //     //     '</div>';
        //     clubElement.innerHTML = `<img class="fan-art-club" src="${fanArt}" alt="Fan Art">
        //         <div class="club-info">
        //         <h2> ${name} </h2>
        //         <p> ${description} </p>
        //         </div>`;
        //     clubListElement.appendChild(clubElement);
        // })
    };

    const fallbackResult = (message) => {
        // clubListElement.innerHTML = "";
        // clubListElement.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
        clubListElement.fallbackError(message);
    };

    searchBar.clickEvent = onButtonSearchClicked;
};

export default main;