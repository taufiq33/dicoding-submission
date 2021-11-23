const {restaurants} = require('./../../DATA.json');
const {viralFood} = require('./../../VIRAL.json');

const viralFoodContainer = document.querySelector('.viral-food__content');
const restaurantsContainer = document.querySelector('.restaurants-container');

const showViralFood = () => {
    viralFood.forEach((viralFoodItem) => {
        let article = document.createElement('article');
        let element = `
            <img src="${viralFoodItem.image}" alt="${viralFoodItem.name}" class="viral-food__item__image">
            <div class="viral-food__item__content">
                <h3><a href="#">${viralFoodItem.name}</a></h3>
                <p>${viralFoodItem.description}</p>
            </div>
        `;
        article.classList.add('viral-food__item');
        article.innerHTML = element;
        viralFoodContainer.appendChild(article);
    });
};

const showAllRestaurant = () => {
    restaurants.forEach((restaurantItem) => {
        let article = document.createElement('article');
        let element = `
            <div class="explore-restaurant__item__image__container">
                <img src="${restaurantItem.pictureId}" alt="${restaurantItem.name}" class="explore-restaurant__item__image">
                <span class="explore-restaurant__item__rating">
                    &#9733; ${restaurantItem.rating}
                </span>
            </div>
            
            <div class="explore-restaurant__item__content">
                <h3><a href="#">${restaurantItem.name}</a></h3>
                <p>${restaurantItem.description}</p>
                <span> &#128204; ${restaurantItem.city} </span>
            </div>
        `;
        article.classList.add('explore-restaurant__item');
        article.innerHTML = element;
        restaurantsContainer.appendChild(article);
    });
};

showViralFood();
showAllRestaurant();