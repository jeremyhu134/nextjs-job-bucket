import React from 'react'
import Link from 'next/link';

interface NavBarButtonProps {
    children: any;
    link: string;
}

const NavBarButton = ({children, link}: NavBarButtonProps) => {
    return (
        <>
            <Link href={link}>
                <button className={`cursor-pointer ${typeof children === 'string' ? 'text-2xl font-semibold':''}`}>
                    {children}
                </button>
            </Link>
        </>
    )
}

export default NavBarButton
