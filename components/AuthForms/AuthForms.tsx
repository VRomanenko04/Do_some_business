'use client'
import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import styles from './AuthForms.module.scss';


const AuthForms = () => {
    const [turn, setTurn] = useState(true);

    const handleChangeTurn = () => {
        setTurn(prevTurn => !prevTurn)
    }

    return (
        <section className={styles.container}>
            <div onClick={handleChangeTurn} className={styles.turn}>
                <div className={`${styles.turn__block} ${turn ? styles.turn__on : styles.turn__off}`}></div>
                <p className={styles.turn_signin}>Sign up</p>
                <p className={styles.turn_signup}>Sign in</p>
            </div>
            {turn ? (
                <div className={styles.anim_container}>
                    <LoginForm />
                </div>
            ) : (
                <div className={styles.anim_container}>
                    <RegisterForm />
                </div>
            )
            }
        </section>
    )
}

export default AuthForms;