
import './styles/main.scss';
import {EmplayWebChat} from './empwc/empwc.component';
import registerMainServiceWorker from './empwc/workers/main.service.worker';

registerMainServiceWorker();


const WebChatElement = new EmplayWebChat();

// WebChatElement.setAttribute('autoBoot', '');

document.body.insertBefore(WebChatElement, document.body.firstChild);

