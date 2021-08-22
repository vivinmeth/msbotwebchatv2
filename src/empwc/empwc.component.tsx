import {render} from "react-dom";
import React, {StrictMode, Fragment, useContext, useEffect, useRef, useState, useMemo} from 'react';
import {v4 as uuidV4} from "uuid";
import {FullReactWebChatProps} from "botframework-webchat/lib/FullReactWebChat";



import EMPWCStyles from './empwc.module.scss';
import {CoreComponent} from "./components/core/core.component";
import {EmplayWebChatAPI} from "./apis";

let setDirectLine: any;

const empwcPropsContextDefault: FullReactWebChatProps = {
    directLine: undefined
}

const EMPWC_PROPS_CONTEXT = React.createContext(empwcPropsContextDefault);

// ToDo: this probably must be a class with a functional react component.
function EmplayWebChatComponent(props: any) {
    const propsFromContext = useContext(EMPWC_PROPS_CONTEXT);

    const [Connection, setConnection] = useState(propsFromContext.directLine);

    setDirectLine = setConnection;

    console.log('EmplayWebChatCOMP -> propsFromContext:', propsFromContext);

    return (
    <Fragment>
        <CoreComponent
            {
                /*...propsFromContext*/
                ...[]
            }
            directLine= {Connection}
        />
    </Fragment>
    );
}

// ToDo: Might have to use the class function as react component idea.
export class EmplayWebChat extends HTMLElement{
    #autoBoot?: boolean;
    #ID = uuidV4();
    #API = new EmplayWebChatAPI();

    get API(){
        return this.#API;
    }

    get InstanceID(): string{
        return `empwc__root__${this.#ID}`;
    }

    constructor() {
        super();
        console.log('New EmplayWebChat created!', this, this.InstanceID);
    }

    newConnect(){
        this.API.Middlewares.DirectLineMWR.newConnection();
        setDirectLine(this.API.Middlewares.DirectLineMWR.Connection);
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
                <EMPWC_PROPS_CONTEXT.Provider value={{directLine: this.#API.Middlewares.DirectLineMWR.Connection}}>
                    <EmplayWebChatComponent />
                </EMPWC_PROPS_CONTEXT.Provider>
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


export function EmplayReactWebChat(props: FullReactWebChatProps) {

    const empwc = useMemo(() => new EmplayWebChat(), []);
    console.log('EmplayReactWebChat -> ', empwc, empwc.InstanceID);
    const injectionDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        injectionDivRef.current?.parentElement?.insertBefore(empwc, injectionDivRef.current);
        injectionDivRef.current?.remove();
    }, [empwc])

    useEffect(() => {
        injectionDivRef.current?.classList.add(empwc.InstanceID);
    });

    return(
            <div ref={injectionDivRef} id={"empwc__injection__div"+uuidV4()} className={[empwc.InstanceID].join(" ")} />
    )
}
