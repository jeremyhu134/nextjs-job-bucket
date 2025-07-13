"use client";

import React from 'react'
import Link from 'next/link';

interface AuthButtonProps {
    children: any;
    onClick?: ()=>void;
}

const AuthButton = ({children, onClick}: AuthButtonProps) => {
    return (
        <>
            <button onClick={onClick} className={`cursor-pointer ${typeof children === 'string' ? 'text-2xl font-semibold':''}`}>
                {children}
            </button>
        </>
    )
}

export default AuthButton
