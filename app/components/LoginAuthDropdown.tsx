"use client";
import React from 'react'
import Image from 'next/image';
import { signIn } from "next-auth/react";

interface LoginAuthDropdownProps {
    text: string;
}

const handleSignIn = (provider: string) => {
    
}

const LoginAuthDropdown = ({text}: LoginAuthDropdownProps) => {
  return (
    <div>
        <button className={`cursor-pointer text-2xl font-semibold`} popoverTarget="popover-1">
            {text}
        </button>

        <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto" id="popover-1" data-position-anchor="--anchor-1">
            <li className="p-2">
                Sign in with:
            </li>
            <li>
                <a className="flex items-center justify-between" onClick={()=>signIn('google')}>Google <Image width={40} height={40} alt="Google logo" src="/images/Google-Logo.png"></Image></a>
            </li>
            <li>
                <a className="flex items-center justify-between" onClick={()=>signIn('github')}>GitHub <Image width={40} height={40} alt="GitHub logo" src="/images/GitHub-Logo.png"></Image></a>
            </li>
        </ul>
    </div>
  )
}

export default LoginAuthDropdown
