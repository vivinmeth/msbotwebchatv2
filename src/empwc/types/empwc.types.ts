import {HTMLAttributes, RefObject} from "react";

import {EmplayWebChat} from "../empwc.component";
import {EmplayWebChatCore} from "../components/core/core.component";


export interface EmplayWebChatAttributes extends HTMLAttributes<EmplayWebChat>{
    autoboot?: '';
    ref?: RefObject<EmplayWebChat>
}

export interface EmplayWebChatCoreAttributes extends HTMLAttributes<EmplayWebChatCore>{
    ref?: RefObject<EmplayWebChatCore>
}
