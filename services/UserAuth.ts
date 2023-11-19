import { firebaseAuth, firebaseDatabase } from "@/app/firebase";
import { IUser } from "@/app/globalRedux/Features/userAuth.slice";
import { IUserData } from "@/app/globalRedux/Features/userData.slice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { get, ref, set } from "firebase/database";
import { fetchDbData } from "./DBactions";


export const UserRegister = async (
        email: string,
        password: string, 
        username: string, 
        setUser: ActionCreatorWithPayload<IUser, "userAuth/setUser">,
        setData: ActionCreatorWithPayload<IUserData, "userDB/setData">
    ) => {
    try {
        // Регистрация user
        const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);

        // Оправка данных в БД
        const userRef = ref(firebaseDatabase, 'users/' + user.uid);
        const userData = {
            email: email,
            username: username
        }
        await set(userRef, userData).then(() => {
            // Отправка данных в redux store
            setUser({
                email: user.email,
                uid: user.uid,
            });

            setData({
                email: user.email,
                username: username
            })
        })

    } catch (error: any) {
        console.log(error);
    }
}


export const UserLogin = async (
        email: string, 
        password: string, 
        setUser: ActionCreatorWithPayload<IUser, "userAuth/setUser">,
        setData: ActionCreatorWithPayload<IUserData, "userDB/setData">
    ) => {
    try {
        // Вход в аккаунт 
        const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
        
        // Получение данных из БД
        const userData = await fetchDbData(user.uid);
        
        // Отправка данных из БД в redux store
        if (userData) {
            setData({
                email: userData.email,
                username: userData.username
            })
        }

        // Отправка данных логина в redux store
        setUser({
            email: user.email,
            uid: user.uid,
        });
    } catch (error: any) {
        console.log(error)
    }
}