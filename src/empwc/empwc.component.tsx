import {render} from "react-dom";
import React, {StrictMode, Fragment, useMemo} from 'react';
import {v4 as uuidV4} from "uuid";


import EMPWCStyles from './empwc.module.scss';
import {CoreComponent} from "./components/core/core.component";
import {EmplayWebChatAPI} from "./apis";

// ToDo: this probably must be a class with a functional react component.
function EmplayWebChatComponent(props: {API?: EmplayWebChatAPI}) {

    const API = useMemo(() => props.API || new EmplayWebChatAPI(

    ), [props.API])

    return (
    <Fragment>
        <CoreComponent
            directLine= {API.Middlewares.DirectLineMWR.Connection}
        />
    </Fragment>
    );
}

export class EmplayWebChat extends HTMLElement{
    #autoBoot?: boolean;
    #ID = uuidV4();

    get InstanceID(): string{
        return `empwc__root__${this.#ID}`;
    }

    constructor() {
        super();
        console.log('New EmplayWebChat created!', this);
    }

    // called when element is attached to the dom tree.
    connectedCallback(){
        this.classList.add(EMPWCStyles.root);
        this.id = this.InstanceID;
        this.#autoBoot = this.hasAttribute('autoboot');
        console.log(`${this.tagName}-> autoboot?:`,this.#autoBoot)
        if (this.#autoBoot){
            this.bootup();
        }
    }

    disconnectedCallback(){

    }

    bootup(){
        render(
            <StrictMode>
                <EmplayWebChatComponent />
            </StrictMode>,
            this
        )
    }
}

export class EMPWC extends EmplayWebChat{
    constructor() {
        super();
        console.log('New EmplayWebChat as EmpWc created!');
    }
}

customElements.define('emplay-webchat', EmplayWebChat);
customElements.define('emp-wc', EMPWC);


export function EmplayReactWebChat() {
    return(
        <Fragment>
            <emplay-webchat autoboot={''}/>
        </Fragment>
    )
}
