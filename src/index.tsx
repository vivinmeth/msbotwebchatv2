import React from "react";
import {render} from "react-dom";
import './styles/main.scss';
import {EmplayReactWebChat, EmplayWebChat} from './empwc/empwc.component';
import registerMainServiceWorker from './empwc/workers/main.service.worker';

registerMainServiceWorker();


// const WebChatElement = new EmplayWebChat();
//
// // WebChatElement.setAttribute('autoBoot', '');
//
// document.body.insertBefore(WebChatElement, document.body.firstChild);


render(
    <React.StrictMode>
        <EmplayReactWebChat />
    </React.StrictMode>,
    document.getElementById('temp_root')
)
