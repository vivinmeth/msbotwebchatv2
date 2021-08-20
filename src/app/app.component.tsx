import React, {useMemo} from 'react';
import AppStyles from './app.module.scss';
import {CoreComponent} from "./components/core/core.component";
import {EmplayWebChatAPI} from "./apis";

// ToDo: this probably must be a class with a functional react component.
export function EmplayWebChat(props: {API?: EmplayWebChatAPI}) {

    const API = useMemo(() => props.API || new EmplayWebChatAPI(

    ), [props.API])

    return (
    <div className={AppStyles.App}>
        <CoreComponent
            directLine= {API.Middlewares.DirectLineMWR.Connection}
        />
    </div>
    );
}

