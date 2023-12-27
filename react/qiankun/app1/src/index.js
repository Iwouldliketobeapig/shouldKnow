import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export async function bootstrap() {
  console.log('这是一些测试');
}

window.addEventListener('message', (event) => {
  // if (event.message !== 'dutao') return;
  if (event.origin !== 'http://localhost:3000') return;
  console.log(event);
  const [port2] = event.ports;
  debugger;
  port2.postMessage({ cq: 'chongqing' })
})

export async function mount(props) {
  const rendDom = props.container ? props.container : document.getElementById('child');

  const root = ReactDOM.createRoot(rendDom);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('child'));

if (root) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export async function unmount(props) {
  console.log(props);
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
