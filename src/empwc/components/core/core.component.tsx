import FullReactWebChat, {createDirectLine} from "botframework-webchat";
import React, {useContext, useMemo} from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {FullReactWebChatProps} from "botframework-webchat/lib/FullReactWebChat";

function EmplayWebChatCoreRC(props: FullReactWebChatProps) {
    const empwc_core = useMemo(() => new EmplayWebChatCore(), []);

    return (
        <emplay-webchat-core host={'react'} disableautorender={''}>
            <empwc_core.Component
                {...props}
            />
        </emplay-webchat-core>
    )
}

function EmplayWebChatCoreComponent(props: FullReactWebChatProps) {

    return (
        <FullReactWebChat
            {...props}
            // FullReactWebChatProps passed
            // activityMiddleware={undefined}
            // activityStatusMiddleware={undefined}
            // attachmentForScreenReaderMiddleware={undefined}
            // attachmentMiddleware={undefined}
            // avatarMiddleware={undefined}
            // cardActionMiddleware={undefined}
            // directLine={directLine}
            // disabled={undefined}
            // groupActivitiesMiddleware={undefined}
            // internalErrorBoxClass={undefined}
            // internalRenderErrorBox={undefined}
            // locale={'en-US'}
            // renderMarkdown={undefined}
            // scrollToEndButtonMiddleware={undefined}
            // selectVoice={undefined}
            // sendTypingIndicator={undefined}
            // styleOptions={undefined}
            // toastMiddleware={undefined}
            // typingIndicatorMiddleware={undefined}
            // userID={undefined}
            // username={undefined}
            //
            // adaptiveCardsHostConfig={undefined}
            // store={undefined}
            className={"empwc__core__webchat"}
        />
    )
}

/**
 * emplay-webchat-core Web Component.
 * This class can be consumed in two ways.
 * React Host: use static EmplayWebChatCore.RC.
 * Universal Host: use emplay-webchat-core html tag or new EmplayWebChatCore()
 */
export class EmplayWebChatCore extends HTMLElement{
    #Host?: string | null;
    #DisableAutoRender?: boolean;

    #props?: FullReactWebChatProps;

    constructor(props?: FullReactWebChatProps) {
        super();
        this.#props = props;
    }

    connectedCallback(){
        this.classList.add('empwc__core');
        this.#Host = this.getAttribute('host');
        this.#DisableAutoRender = this.hasAttribute('disableautorender');
        if (this.#Host !== 'react' && !this.#DisableAutoRender){
            this.#render();
        }
    }

    disconnectedCallback(){

    }

    render(props?: FullReactWebChatProps){
        this.#props = props;
        this.#render();
    }

    destroy(){

        unmountComponentAtNode(this);
        this.remove();
    }

    #render(){
        const Component = this.Component;
        render(
            <Component
                {
                    ... this.#props || { directLine: null }
                }
            />,
            this
        )
    }

    /**
     * This is the internal React Component Logic.
     * EmplayWebChatCore.ReactComponent and the web component use this under the hood.
     * It's recommended not to use this method.
     * Use EmplayWebChatCore.RC (for React host) and Web Component (for others) instead.
     */
    Component = EmplayWebChatCoreComponent;

    /**
     * The React Component for React based hosts.
     *
     *
     */
    static RC = EmplayWebChatCoreRC;
}

customElements.define('emplay-webchat-core', EmplayWebChatCore);

/**


 */
