import Link from 'next/link';
import React from 'react';
import styles from './NavBar.module.scss';

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
    return (
        <div className={styles.menu__position}>
            <nav className={styles.menu__container}>
                {links.map((link) => (
                    <div key={link.label}>
                        <Link className={styles.link} href={link.href}>
                            {link.icon}
                            {link.label.toLowerCase()}
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default NavBar;