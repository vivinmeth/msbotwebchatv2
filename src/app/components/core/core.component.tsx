import FullReactWebChat, {createDirectLine} from "botframework-webchat";
import React, {useMemo} from "react";


export const CoreComponent = React.memo((props: {secret: string}) => {
    if (!props.secret){
        // throw new Error('Invalid DirectLine Secret!');
    }

    const directLine = useMemo(() => createDirectLine({
        secret: props.secret
    }), [props.secret]);


    return (
        <div id={"empwc__core__root"}>
            <FullReactWebChat
                directLine={directLine}
            />
        </div>
    )
});
