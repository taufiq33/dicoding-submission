/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const NotificationHelper = {
  sendNotification({ title, options }) {
    if (!this._checkAvailability()) {
      console.log('Notification is not supported in this browser');
      return;
    }

    if (!this._checkPermission()) {
      console.log('User did not yet granted permission to show Notification');
      this._requestPermission();
      return;
    }

    this._showNotification({ title, options });
  },

  _checkAvailability() {
    return !!('Notification' in window);
  },

  _checkPermission() {
    return Notification.permission === 'granted';
  },

  async _requestPermission() {
    const status = await Notification.requestPermission();

    if (status === 'denied') {
      console.error('Notification denied by user');
    } else if (status === 'default') {
      console.error('Notification closed by user');
    }
  },

  async _showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;
