import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }

  console.log('Service worker tidak didukung oleh browser yang anda pakai.');
};

export default swRegister;
