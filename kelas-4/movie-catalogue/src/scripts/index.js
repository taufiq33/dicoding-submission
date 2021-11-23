/* eslint-disable no-console */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';

import App from './views/app';
import swRegister from './utils/sw-register';
import CONFIG from './globals/config';
import WebSocketInitiator from './utils/websocket-initiator';

// eslint-disable-next-line no-unused-vars
const appInstance = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  appInstance.renderPage();
});

window.addEventListener('load', () => {
  appInstance.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
