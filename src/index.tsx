import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import {AppComponent} from './app/app.component';
import registerMainServiceWorker from './app/workers/main.service.worker';

registerMainServiceWorker();


ReactDOM.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

