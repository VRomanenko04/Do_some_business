import React from 'react';
import styles from './Cabinet.module.scss';
import CabinetHub from '@/components/CabinetHub/CabinetHub';


const CabinetPage = () => {
    return (
        <>
            <main className={styles.main}>
                <section className={styles.wrapper}>
                    <CabinetHub/>
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