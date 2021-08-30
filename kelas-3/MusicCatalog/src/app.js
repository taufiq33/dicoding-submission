import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'regenerator-runtime';
import './css/style.css';

//component

import './js/components/app-navbar.js';
import './js/components/filter-form.js';
import './js/components/search-bar.js';
import './js/components/search-lists.js';

// import view
import main from './js/view/main.js';

document.addEventListener("DOMContentLoaded", main);