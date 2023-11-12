'use client';

import { Provider } from "react-redux";;
import { store } from "./store";
import { useEffect } from "react";
import { initializeUser } from "./Features/userAuth.slice";

function initializeOnMount(callback: () => void) {
    useEffect(() => {
        callback();
    }, []);
}

export function Providers({ children }: any) {

    initializeOnMount(initializeUser);

    return (
        <Provider store={store}>
            { children }
        </Provider>
    )
}