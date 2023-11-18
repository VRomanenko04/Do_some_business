'use client';

import { configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./Features/userAuth.slice";
import { reducer as dataReducer } from "./Features/userData.slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        userData: dataReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
