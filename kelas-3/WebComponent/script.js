import CustomImage from './custom-image.js';
import ArticleElement from './article/article-element.js';
import articleData from './article/article-data.js';
import AlbumList from './album-list.js';

// console.log("hallo from script.js");

// customElements.define("custom-image", CustomImage);

// let elemenBaru = document.createElement("custom-image");

// document.getElementById("changeBtn").addEventListener("click" , function(){
//     elemenBaru.setAttribute("src", document.getElementById("srcId").value);   
// })

customElements.define("album-list", AlbumList);
let container = document.getElementById("container");

// elemenBaru.setAttribute("src", "https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png");
// elemenBaru.setAttribute("alt", "alt text");
// elemenBaru.setAttribute("caption", "Gambar default user");
// container.appendChild(elemenBaru);

// customElements.define("article-element", ArticleElement);

// articleData.forEach((value, index, array) => {
//     let articleElement = document.createElement("article-element");
//     articleElement.article = value;

//     container.appendChild(articleElement);
// })
let listAlbum = document.createElement("album-list");
listAlbum.list = articleData;

container.appendChild(listAlbum);