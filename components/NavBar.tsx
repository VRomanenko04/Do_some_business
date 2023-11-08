import Link from 'next/link';
import React from 'react';

import { RiTeamFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingBasket } from 'react-icons/fa';
import { MdBusinessCenter } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';

const links = [
    {label: 'Cabinet', href: '/cabinet', icon: <BsFillPersonFill/>},
    {label: 'Stats', href: '/statistic', icon: <ImStatsDots/>},
    {label: 'Game', href: '/game', icon: <MdBusinessCenter/>},
    {label: 'Top', href: '/top', icon: <RiTeamFill/>},
    {label: 'Market', href: '/market', icon:<FaShoppingBasket/>}
]

const NavBar = () => {
    return (
        <div>
            <nav>
                {links.map((link) => (
                    <div key={link.label}>
                        {link.icon}
                        <Link href={link.href}>{link.label}</Link>
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default NavBar;