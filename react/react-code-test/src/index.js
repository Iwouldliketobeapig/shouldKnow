import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import singleSpaReact from 'single-spa-react';
import { registerMicroApps, start } from 'qiankun';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './store';
import { Provider } from 'react-redux';

const store = createStore(reducer);

// const domElementGetter = () => {
//   return document.getElementById("root")
// }
// // TODO TEST
// export const { bootstrap, mount, unmount } = singleSpaReact({
//   React,
//   ReactDOM,
//   rootComponent: App,
//   domElementGetter,
// });

// registerMicroApps([
//   {
//     name: 'app1',
//     entry: '//localhost:3001',
//     activeRule: '/app1',
//     container: '#child',
//   },
// ]);

start();

// window.addEventListener('load', () => {
//   // Is service worker available?
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./sw.js').then(() => {
//       console.log('Service worker registered!');
//     }).catch((error) => {
//       console.warn('Error registering service worker:');
//       console.warn(error);
//     });
//   }
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
