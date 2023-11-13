'use client'
import { useActions } from '@/hooks/useAction';
import { UserRegister } from '@/services/UserAuth';
import React, { useState } from 'react';


const RegisterForm = () => {
    const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
    });

    const { setUser } = useActions();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterForm({
            ...registerForm,
            [name]: value
        });
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        UserRegister(registerForm.email, registerForm.password, setUser);

        setRegisterForm({
            email: '',
            password: ''
        });
    }

    return (
        <>
            <h4>Sign up</h4>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <label>E-mail:</label>
                    <input 
                        type="email" 
                        id='reg-email' 
                        placeholder='yourmail@mail.com' 
                        name='email'
                        value={registerForm.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        id='reg-password' 
                        placeholder='********' 
                        name='password'
                        value={registerForm.password}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default RegisterForm;