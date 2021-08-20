import FullReactWebChat from "botframework-webchat";
import React from "react";


export const CoreComponent = React.memo((props: {directLine: any}) => {


    return (
        <div id={"empwc__core__root"}>
            <FullReactWebChat
                directLine={props.directLine}
            />
        </div>
    )
});
