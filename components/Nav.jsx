"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]

const Nav = () => {

    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "dark:text-accent text-accentLight border-b-2 dark:border-accent border-accentLight"} capitalize font-medium dark:hover:text-accent-hover hover:text-accentLight-hover transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav