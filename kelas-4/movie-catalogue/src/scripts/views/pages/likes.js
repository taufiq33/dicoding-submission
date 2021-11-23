import FavoriteMovieIdb from '../../data/database';
import { createMovieItemTemplate } from '../templates/template-creator';

const Likes = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Favourite Movies</h2>
      <div id="movies" class="movies">

      </div>
    </div>
    `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');

    if (movies.length > 0) {
      movies.forEach((movie) => {
        moviesContainer.innerHTML += createMovieItemTemplate(movie);
      });
    } else {
      moviesContainer.innerHTML += '<h3>Empty...</h3>';
    }
  },
};

export default Likes;
