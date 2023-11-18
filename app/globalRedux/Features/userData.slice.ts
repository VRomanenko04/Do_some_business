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
            const currentState = state;

            const stateUpdate = {
                eamil: state.email = action.payload.email ?? currentState.email,
                username: state.username = action.payload.username ?? currentState.username
            };

            const newState = {
                ...currentState,
                ...stateUpdate
            };

            const userDataString = JSON.stringify(newState);
            sessionStorage.setItem('userData', userDataString);

            return newState;
        }
    }
});

export const {reducer, actions} = userDataSlice;