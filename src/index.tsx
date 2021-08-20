import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';
import {EmplayWebChat} from './app/app.component';
import registerMainServiceWorker from './app/workers/main.service.worker';

registerMainServiceWorker();


ReactDOM.render(
  <React.StrictMode>
    <EmplayWebChat />
  </React.StrictMode>,
  document.getElementById('root')
);

