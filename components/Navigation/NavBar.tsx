'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import styles from './NavBar.module.scss';
import { useAuth } from '@/hooks/useAuth';

import { RiTeamFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingBasket } from 'react-icons/fa';
import { MdBusinessCenter } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';


const links = [
    {label: 'Cabinet', href: '/cabinet', icon: <BsFillPersonFill fontSize={24} />},
    {label: 'Stats', href: '/statistic', icon: <ImStatsDots fontSize={24} />},
    {label: '', href: '/game', icon: <MdBusinessCenter className={styles.game__link} />},
    {label: 'Top', href: '/top', icon: <RiTeamFill fontSize={24} />},
    {label: 'Market', href: '/market', icon:<FaShoppingBasket fontSize={24} />}
]

const NavBar = () => {
    const path = usePathname();
    const { isAuth } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(!isAuth) {
            router.push('/');
        }
    }, [isAuth])

    return (
        <div className={styles.menu__position}>
            <nav className={styles.menu__container}>
                {links.map((link) => (
                    <React.Fragment key={link.href}>
                        {isAuth && (
                            <Link className={`${styles.link} ${path === link.href ? styles.active : ''}`} href={link.href}>
                                {link.icon}
                                <p>{link.label.toLowerCase()}</p>
                            </Link>
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </div>
    )
}

export default NavBar;