import React from 'react';
import {EmplayWebchatAPI} from "./apis";



export class EmplayWebChat extends EmplayWebchatAPI{

    constructor() {
        super();
    }

    connectedCallback(){
        console.log('I got injected', this);
    }

    bootup(){
        console.log('booting up...', this);
        return this;
    }
}

customElements.define('emplay-webchat', EmplayWebChat);
