import FullReactWebChat from "botframework-webchat";
import React from "react";
import {FullReactWebChatProps} from "botframework-webchat/lib/FullReactWebChat";

// ToDo: Might have to use the class function as react component idea.
export class EmplayWebChatCore extends HTMLElement{
    constructor() {
        super();
    }
}

customElements.define('emplay-webchat-core', EmplayWebChatCore);

export const CoreComponent = React.memo((props: FullReactWebChatProps) => {


    return (
        <emplay-webchat-core id={"empwc__core__root"}>
            <FullReactWebChat
                {...props}
                // FullReactWebChatProps passed
                // activityMiddleware={undefined}
                // activityStatusMiddleware={undefined}
                // attachmentForScreenReaderMiddleware={undefined}
                // attachmentMiddleware={undefined}
                // avatarMiddleware={undefined}
                // cardActionMiddleware={undefined}
                // directLine={props.directLine}
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
        </emplay-webchat-core>
    )
});
