'use client'
import { useActions } from '@/hooks/useAction';
import { UserLogin } from '@/services/UserAuth';
import React, { useState } from 'react'
import styles from './LoginForm.module.scss';


const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });

    const { setUser, setData } = useActions();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value
        });
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        UserLogin(loginForm.email, loginForm.password, setUser, setData);

        setLoginForm({
            email: '',
            password: ''
        });
    }

    return (
        <div className={styles.form_container}>  
            <h4>Sing in</h4>
            <form className={styles.form} onSubmit={handleSubmitForm}>
                <div className={styles.input_container}>
                    <label>E-mail:</label>
                    <input 
                        type="email" 
                        id='login-email' 
                        placeholder='yourmail@mail.com' 
                        name='email' 
                        value={loginForm.email}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.input_container}>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        id='login-password' 
                        placeholder='********' 
                        name='password' 
                        value={loginForm.password}
                        onChange={handleChange}
                    />
                </div>
                <button className={styles.submit__btn} type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default LoginForm;