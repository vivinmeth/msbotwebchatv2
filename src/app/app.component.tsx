import React, {useCallback, useEffect, useRef, useState} from 'react';
import AppStyles from './app.module.scss';
import {CoreComponent} from "./components/core/core.component";

export function AppComponent() {
    const dlInputRef = useRef<HTMLInputElement | null>(null);
    const [SECRET, setSecret] = useState("");

    const setupDirectLine = useCallback(() => {
        const currentDLValue = dlInputRef.current?.value;
        if (currentDLValue && SECRET !== currentDLValue){
            setSecret(currentDLValue);
        }
    }, [SECRET])

    useEffect(() => {
        const InitialDLSecret = prompt('Enter DL Secret to Connect:');
        if (InitialDLSecret){
            setSecret(InitialDLSecret);
        }
    }, []);

    return (
    <div className={AppStyles.App}>
        <input type="text" ref={dlInputRef} placeholder={"DirectLine Secret"}/>
        <button onClick={setupDirectLine}>Set DirectLine</button>
        <CoreComponent
        secret={SECRET}
        />
    </div>
    );
}

