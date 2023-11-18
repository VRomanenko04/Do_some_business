'use client';

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./Features/userAuth.slice";
import { reducer as dataReducer } from "./Features/userData.slice";

const reducers = combineReducers({
    userAuth: authReducer,
    userData: dataReducer,
})

export const store = configureStore({
    reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
