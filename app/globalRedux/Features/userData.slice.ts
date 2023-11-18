import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserData {
    username: string | null
    email: string | null
}

const initialState: IUserData = {
    username: null,
    email: null
}

const userDataSlice = createSlice({
    name: 'userDB',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<IUserData>) {
            const newState = {
                ...state,
                email: action.payload.email ?? state.email,
                username: action.payload.username ?? state.username
            };

            const userDataString = JSON.stringify(newState);
            sessionStorage.setItem('userData', userDataString);

            return newState;
        }
    }
});

export const {reducer, actions} = userDataSlice;