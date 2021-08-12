// function DataSource(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
// }

// DataSource.prototype.searchClub = function (keyword)  {
//     const filteredClubs = clubs.filter( (club) => {
//         return club.name.toUpperCase().includes(keyword.toUpperCase());
//     });

//     if (filteredClubs.length) {
//         this.onSuccess(filteredClubs);
//     } else {
//         // this.onFailed(keyword + " is not found");
//         this.onFailed(`"${keyword}" is not found`);
//     }
// };
// import clubs from "./clubs.js";

class DataSource {
    static async searchClub(keyword){
        // return new Promise((resolve, reject) => {
        //     const filteredClubs = clubs.filter( (club) => {
        //         return club.name.toUpperCase().includes(keyword.toUpperCase());
        //     });
        
        //     if (filteredClubs.length) {
        //         resolve(filteredClubs);
        //     } else {
        //         // this.onFailed(keyword + " is not found");
        //         reject(`"${keyword}" is not found`);
        //     }
        // })
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            if(response.teams){
                return Promise.resolve(response.teams);
            } else {
                // return Promise.reject(`${keyword} not found`);
                throw Error(`${keyword} is not found`);
            }
        })
        .catch(error => {
            return Promise.reject(error);
        });

    }
}

export default DataSource;