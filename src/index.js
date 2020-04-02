import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './serviceWorker';
import './index.css'

console.log('hei')
window.renderHomeLayout = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
    unregister()
  );
};

window.unmountHomeLayout = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
