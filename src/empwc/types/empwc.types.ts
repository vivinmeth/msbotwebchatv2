import {HTMLAttributes, RefObject} from "react";


import {EmplayWebChatCore} from "../components/core/core.component";
import {EmplayWebChat} from "../empwc.component";

export interface CommonWebCompAttributes<T> extends HTMLAttributes<T>{
    host?: string;
    ref?: RefObject<T>;
    disableautorender?: '';
    notstandalone?:'';
}

export interface EmplayWebChatCoreAttributes extends CommonWebCompAttributes<EmplayWebChatCore>{

}

export interface EmplayWebChatAttributes extends CommonWebCompAttributes<EmplayWebChat>{
    autoboot?: '';
}
