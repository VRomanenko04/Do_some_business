'use client'
import { firebaseAuth } from '@/app/firebase';
import { useActions } from '@/hooks/useAction';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';


const RegisterForm = () => {
    const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
    });

    const { setUser } = useActions();

    const UserRegister = async (email: string, password: string) => {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterForm({
            ...registerForm,
            [name]: value
        });
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        UserRegister(registerForm.email, registerForm.password);

        setRegisterForm({
            email: '',
            password: ''
        });
    }

    return (
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
            <button type='submit'>Sign in</button>
        </form>
    )
}

export default RegisterForm;