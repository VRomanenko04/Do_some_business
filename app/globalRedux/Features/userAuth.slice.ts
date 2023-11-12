'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IUser {
    email: string | null
    uid: string | null
}

const initialState: IUser = {
    email: null,
    uid: null
}

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.email = action.payload.email;
            state.uid = action.payload.uid;

            sessionStorage.setItem("user", JSON.stringify(state));
        }
    }
});


export const initializeUser = () => {
    const storedUserData = sessionStorage.getItem("user");
    if (storedUserData) {
        const decodedData = decodeURIComponent(storedUserData);
        const userData = JSON.parse(decodedData);
        console.log(userData);
        return userAuthSlice.actions.setUser(userData);
    } else {
        return null;
    }
}

export const { reducer, actions } = userAuthSlice;