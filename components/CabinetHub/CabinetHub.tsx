'use client'
import React from 'react';
import styles from './CabinetHub.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/globalRedux/store';

const CabinetHub = () => {
    const userData = useSelector((state: RootState) => state.userData)

    return (
        <div className={styles.container}>
            <div className={styles.photo}></div>
            <div className={styles.small_cont}>
                <p>Name: {userData.username}</p>
                <p>E-mail: {userData.email}</p>
            </div>
            <div className={styles.small_cont}>
                <p>Age: ...</p>
                <p>Gender: ...</p>
            </div>
        </div>
    )
}

export default CabinetHub;