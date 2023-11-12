'use client';
import { Provider } from "react-redux";;
import { store } from "./store";
import { useEffect } from "react";
import { initializeUser } from "./Features/userAuth.slice";

export function Providers({ children }: any) {

    useEffect(() => {
        const initializeUserData = async () => {
            const userInitializationAction = initializeUser();
            if (userInitializationAction) {
                store.dispatch(userInitializationAction);
            } 
        }

        initializeUserData();
    }, []);

    return (
        <Provider store={store}>
            { children }
        </Provider>
    )
}