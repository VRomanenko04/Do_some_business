'use client'
import { useActions } from '@/hooks/useAction';
import { UserRegister } from '@/services/UserAuth';
import React, { useEffect, useState } from 'react';
import styles from './RegisterForm.module.scss'


const RegisterForm = () => {
    const [isCorrectPass, setIsCorrestPass] = useState(true);
    const [registerForm, setRegisterForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        if (isCorrectPass) {
            UserRegister(registerForm.email, registerForm.password, setUser);

            setRegisterForm({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } else {
            alert('Something wrong')
        }
    }

    useEffect(() => {
        setIsCorrestPass(registerForm.password === registerForm.confirmPassword)
    }, [registerForm.password, registerForm.confirmPassword])


    return (
        <div className={styles.form_container}>
            <h4>Sign up</h4>
            <form className={styles.form} onSubmit={handleSubmitForm}>
                <div className={styles.input_container}>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        id='reg-username' 
                        name='username'
                        value={registerForm.username}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.input_container}>
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
                <div className={styles.input_container}>
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
                <div className={styles.input_container}>
                    <label>Confirm pass:</label>
                    <input 
                        type="password" 
                        id='reg-confirmPass' 
                        placeholder='********' 
                        name='confirmPassword'
                        value={registerForm.confirmPassword}
                        onChange={handleChange}
                    />
                    {!isCorrectPass && (
                        <p className={styles.error}>Incorrect pass</p>
                    )}
                </div>
                <button className={styles.submit__btn} type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default RegisterForm;