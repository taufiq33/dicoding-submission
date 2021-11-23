/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  console.log('Service Worker : Installing...');
  event.waitUntil(CacheHelper.cachingAppShell(
    [...assets, './'],
  ));
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker : Activate');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  console.log('Service Worker : Fetch ');

  event.respondWith(CacheHelper.revalidateCache(event.request));
});
