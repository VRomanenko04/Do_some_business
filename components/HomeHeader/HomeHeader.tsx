'use client'
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import styles from './HomeHeader.module.scss';

const HomeHeader = () => {
    const { isAuth } = useAuth();

    return (
        <section className={styles.header}>
            <h1>Do some Business</h1>
            {isAuth && (
                <Link className={styles.link} href='/cabinet'>Start playing</Link>
            )}
        </section>
    )
}

export default HomeHeader;