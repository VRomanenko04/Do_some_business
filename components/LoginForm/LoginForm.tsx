'use client'
import { useActions } from '@/hooks/useAction';
import { UserLogin } from '@/services/UserAuth';
import React, { useState } from 'react'


const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });

    const { setUser } = useActions();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value
        });
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        UserLogin(loginForm.email, loginForm.password, setUser);

        setLoginForm({
            email: '',
            password: ''
        });
    }

    return (
        <>
            <h4>Sing in</h4>
            <form onSubmit={handleSubmitForm}>
                <div>
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
                <div>
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
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default LoginForm;