import { fetchDbData } from '@/services/DBactions';
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

            sessionStorage.setItem('userData', JSON.stringify(newState));

            return newState;
        }
    }
});

export const userDataInitialize = () => {
    const storedData = sessionStorage.getItem("userData");
    if (storedData) {
        const storedDataObj = JSON.parse(storedData)
        return userDataSlice.actions.setData(storedDataObj)
    } else {
        return null
    }
}

export const {reducer, actions} = userDataSlice;