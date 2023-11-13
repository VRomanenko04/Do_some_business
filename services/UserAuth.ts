import { firebaseAuth } from "@/app/firebase";
import { IUser } from "@/app/globalRedux/Features/userAuth.slice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import type { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const UserRegister = async (email: string, password: string, setUser: ActionCreatorWithPayload<IUser, "userAuth/setUser">) => {
    try {
        const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);

        setUser({
            email: user.email,
            uid: user.uid,
        });
    } catch (error: any) {
        console.log(error);
    }
}

export const UserLogin = async (email: string, password: string, setUser: ActionCreatorWithPayload<IUser, "userAuth/setUser">) => {
    try {
        const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
        
        setUser({
            email: user.email,
            uid: user.uid,
        });
    } catch (error: any) {
        console.log(error)
    }
}