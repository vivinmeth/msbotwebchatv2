import {HTMLAttributes, RefObject} from "react";


import {EmplayWebChatCore} from "../components/core/core.component";

export interface CommonWebCompAttributes<T> extends HTMLAttributes<T>{
    host?: string;
    ref?: RefObject<T>;
    disableautorender?: '';
}

export interface EmplayWebChatCoreAttributes extends CommonWebCompAttributes<EmplayWebChatCore>{

}

/** adding custom elements in react typescript context
export interface EmplayWebChatAttributes extends HTMLAttributes<EmplayWebChat>{
    autoboot?: '';
    ref?: RefObject<EmplayWebChat>
}
*/
