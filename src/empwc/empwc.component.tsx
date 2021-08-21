import {render} from "react-dom";
import React, {StrictMode, Fragment, useMemo} from 'react';
import AppStyles from './empwc.module.scss';
import {CoreComponent} from "./components/core/core.component";
import {EmplayWebChatAPI} from "./apis";

// ToDo: this probably must be a class with a functional react component.
export function EmplayWebChatC(props: {API?: EmplayWebChatAPI}) {

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

    constructor() {
        super();
        console.log('New EmplayWebChat created!', this);
        this.classList.add(AppStyles.root);
    }

    // called when element is attached to the dom tree.
    connectedCallback(){
        this.#autoBoot = !!this.getAttribute('autoBoot');
        if (this.#autoBoot){
            this.bootup();
        }
    }

    disconnectedCallback(){

    }

    bootup(){
        render(
            <StrictMode>
                <EmplayWebChatC />
            </StrictMode>,
            this
        )
    }
}

class EmpWc extends EmplayWebChat{
    constructor() {
        super();
        console.log('New EmplayWebChat as EmpWc created!');
    }
}

customElements.define('emplay-webchat', EmplayWebChat);
customElements.define('emp-wc', EmpWc);
