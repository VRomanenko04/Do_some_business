'use client';
import { Provider } from "react-redux";;
import { store } from "./store";
import { useEffect } from "react";
import { initializeUser } from "./Features/userAuth.slice";
import { userDataInitialize } from "./Features/userData.slice";

export function Providers({ children }: {children : React.ReactNode}) {

    useEffect(() => {
        const initializeUserAuth = async () => {
            const userInitializationAction = initializeUser();
            if (userInitializationAction) {
                store.dispatch(userInitializationAction);
            } 
        }

        initializeUserAuth();

        const initializeUserData = async () => {
            const userInitializationAction = userDataInitialize();
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