import {Ajax} from './Api.js';

const ajaxObject = new Ajax();

export class Data {

    static search(keyword, type = 'track', hasLyrics = 0, counter = 1){
        let hitCounter = counter;
        //console.log(`Reqeust ke ${hitCounter}`);
        ajaxObject.endpoint = `?q=${encodeURI(keyword)}&limit=&type=${type}&lyrics=${hasLyrics}`;
        return new Promise((resolve, reject) => {
            ajaxObject.makeRequest().then((response) => {
                if(response.length > 0){
                    //console.log("Data ditemukan");
                    // console.table(response);
                    resolve(response);
                } else {
                    reject("data tidak ditemukan");
                }
            }).catch ((error) => {
                //console.log(error);
                if(hitCounter < 3) {
                    //console.log("request ulang dalam 3detik...");
                    setTimeout(() => {
                       resolve(this.search(keyword, type, hasLyrics, hitCounter + 1));
                    }, 3000);
                } else {
                    window.alert(`${error} "JARINGAN RUSAK"`);
                    window.location.reload();
                }
            });
        });
        
    }

    static getSong(id_artist, id_album, id_track, counter = 1) {
        ajaxObject.endpoint = `/artists/${id_artist}/albums/${id_album}/tracks/${id_track}`;
        let hitCounter = counter;
        //console.log(`Reqeust ke ${hitCounter}`);
        return new Promise((resolve, reject) => {
            ajaxObject.makeRequest().then((response) => {
                if(response){
                    //console.log("Data ditemukan");
                    // console.table(response);
                    resolve(response);
                } else {
                    reject("data tidak ditemukan");
                }
            }).catch ((error) => {
                //console.log(error);
                if(hitCounter < 3) {
                    //console.log("request ulang dalam 3detik...");
                    setTimeout(() => {
                       resolve(this.getSong(id_artist, id_album, id_track, hitCounter + 1));
                    }, 3000);
                } else {
                    window.alert(`${error} "JARINGAN RUSAK"`);
                    window.location.reload();
                }
            });
        });

    }

    static getLyric(id_artist, id_album, id_track, counter = 1) {
        ajaxObject.endpoint = `/artists/${id_artist}/albums/${id_album}/tracks/${id_track}/lyrics`;
        let hitCounter = counter;
        //console.log(`Reqeust ke ${hitCounter}`);
        return new Promise((resolve, reject) => {
            ajaxObject.makeRequest().then((response) => {
                if(response){
                    //console.log("Data ditemukan");
                    // console.table(response);
                    resolve(response);
                } else {
                    reject("data tidak ditemukan");
                }
            }).catch ((error) => {
                //console.log(error);
                if(hitCounter < 3) {
                    //console.log("request ulang dalam 3detik...");
                    setTimeout(() => {
                       resolve(this.getLyric(id_artist, id_album, id_track, hitCounter + 1));
                    }, 3000);
                } else {
                    window.alert(`${error} "JARINGAN RUSAK"`);
                    window.location.reload();
                }
            });
        });

    }

    static getAlbum(id_artist, id_album, counter = 1) {
        ajaxObject.endpoint = `/artists/${id_artist}/albums/${id_album}`;
        let hitCounter = counter;
        //console.log(`Reqeust ke ${hitCounter}`);
        return new Promise((resolve, reject) => {
            ajaxObject.makeRequest().then((response) => {
                if(response){
                    //console.log("Data ditemukan");
                    // console.table(response);
                    resolve(response);
                } else {
                    reject("data tidak ditemukan");
                }
            }).catch ((error) => {
                //console.log(error);
                if(hitCounter < 3) {
                    //console.log("request ulang dalam 3detik...");
                    setTimeout(() => {
                       resolve(this.getAlbum(id_artist, id_album, hitCounter + 1));
                    }, 3000);
                } else {
                    window.alert(`${error} "JARINGAN RUSAK"`);
                    window.location.reload();
                }
            });
        });

    }

    static getArtist(id_artist, counter = 1) {
        ajaxObject.endpoint = `/artists/${id_artist}`;
        let hitCounter = counter;
        //console.log(`Reqeust ke ${hitCounter}`);
        return new Promise((resolve, reject) => {
            ajaxObject.makeRequest().then((response) => {
                if(response){
                    //console.log("Data ditemukan");
                    // console.table(response);
                    resolve(response);
                } else {
                    reject("data tidak ditemukan");
                }
            }).catch ((error) => {
                //console.log(error);
                if(hitCounter < 3) {
                    //console.log("request ulang dalam 3detik...");
                    setTimeout(() => {
                       resolve(this.getArtist(id_artist, hitCounter + 1));
                    }, 3000);
                } else {
                    window.alert(`${error} "JARINGAN RUSAK"`);
                    window.location.reload();
                }
            });
        });

    }

    static getTracksAlbum(id_artist, id_album, counter = 1) {
        ajaxObject.endpoint = `/artists/${id_artist}/albums/${id_album}/tracks`;
        let hitCounter = counter;
        //console.log(`Reqeust ke ${hitCounter}`);
        return new Promise((resolve, reject) => {
            ajaxObject.makeRequest().then((response) => {
                if(response){
                    //console.log("Data ditemukan");
                    // console.table(response);
                    resolve(response);
                } else {
                    reject("data tidak ditemukan");
                }
            }).catch ((error) => {
                //console.log(error);
                if(hitCounter < 3) {
                    //console.log("request ulang dalam 3detik...");
                    setTimeout(() => {
                       resolve(this.getTracksAlbum(id_artist, id_album, hitCounter + 1));
                    }, 3000);
                } else {
                    window.alert(`${error} "JARINGAN RUSAK"`);
                    window.location.reload();
                }
            });
        });

    }

    static getAlbums(id_artist, counter = 1) {
        ajaxObject.endpoint = `/artists/${id_artist}/albums`;
        let hitCounter = counter;
        //console.log(`Reqeust ke ${hitCounter}`);
        return new Promise((resolve, reject) => {
            ajaxObject.makeRequest().then((response) => {
                if(response){
                    //console.log("Data ditemukan");
                    // console.table(response);
                    resolve(response);
                } else {
                    reject("data tidak ditemukan");
                }
            }).catch ((error) => {
                //console.log(error);
                if(hitCounter < 3) {
                    //console.log("request ulang dalam 3detik...");
                    setTimeout(() => {
                       resolve(this.getAlbums(id_artist, hitCounter + 1));
                    }, 3000);
                } else {
                    window.alert(`${error} "JARINGAN RUSAK"`);
                    window.location.reload();
                }
            });
        });

    }
}