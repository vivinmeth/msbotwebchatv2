import React from "react";
import {render} from "react-dom";
import './styles/main.scss';
import {EmplayReactWebChat, EmplayWebChat} from './empwc/empwc.component';
import registerMainServiceWorker from './empwc/workers/main.service.worker';

registerMainServiceWorker();


if (process.env.NODE_ENV === "development"){
    const ROOT_ID = 'temp__root';
    let root = document.getElementById(ROOT_ID);
    if (!root){
        root = document.createElement('div');
        root.id = ROOT_ID;
        document.body.insertBefore(root, document.body.firstChild);
    }
    render(
        <React.StrictMode>
            <EmplayReactWebChat />
        </React.StrictMode>,
        root
    )
}
else{
    const WebChatElement = new EmplayWebChat();

    WebChatElement.setAttribute('autoBoot', '');

    document.body.insertBefore(WebChatElement, document.body.firstChild);
}

