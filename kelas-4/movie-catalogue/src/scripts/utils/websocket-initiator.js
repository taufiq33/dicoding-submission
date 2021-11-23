/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._messageHandler;
  },

  _messageHandler(message) {
    const movie = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema!`,
      options: {
        body: movie.overview,
        image: `${CONFIG.BASE_IMAGE_URL}${movie.poster_path}`,
      },
    });
  },
};

export default WebSocketInitiator;