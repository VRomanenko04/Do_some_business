import NavBar from '@/components/Navigation/NavBar';
import React from 'react';
import styles from './Cabinet.module.scss';


const CabinetPage = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className={styles.main}>
                <section className={styles.wrapper}>
                    <div className={styles.up__container}>
                        <div className={styles.photo}></div>
                        <div className={styles.small_cont}>
                            <p>Name: Vladimir</p>
                            <p>E-mail: ...</p>
                        </div>
                        <div className={styles.small_cont}>
                            <p>Age: 19</p>
                            <p>Gender: Male</p>
                        </div>
                    </div>
                </section>
                <section className={styles.wrapper}>
                    <div className={styles.down__container}>
                        <p>Projects in work: ...</p>
                        <p>Financial condition: ...</p>
                        <p>Place in iForbes: ...</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CabinetPage;