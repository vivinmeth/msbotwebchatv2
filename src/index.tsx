import React from "react";
import {render} from "react-dom";
import './styles/main.scss';
import {EmplayWebChatCore} from "./empwc/components/core/core.component";
import registerMainServiceWorker from './empwc/workers/main.service.worker';
import {createDirectLine} from "botframework-webchat";
import {EmplayWebChat} from "./empwc/empwc.component";

registerMainServiceWorker();


// if (process.env.NODE_ENV === "development"){
    const ROOT_ID = 'temp__root';
    let root = document.getElementById(ROOT_ID);
    if (!root){
        root = document.createElement('div');
        root.id = ROOT_ID;
        document.body.insertBefore(root, document.body.firstChild);
    }
    render(
        <React.StrictMode>
            <EmplayWebChatCore.RC
                directLine={createDirectLine({
                    secret: ""
                })}

            />
        </React.StrictMode>,
        root
    )
// }
// else{
//     const WebChatElement = new EmplayWebChatCore({
//         directLine: createDirectLine({
//             secret: ""
//         })
//     });
    const WebChatElement = new EmplayWebChat();

    // WebChatElement.setAttribute('disableautorender', '');

    document.body.insertBefore(WebChatElement, document.body.firstChild);

    export const cdl = createDirectLine;
// }

