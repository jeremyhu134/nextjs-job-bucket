"use client";
import React from 'react'
import AuthButton from './AuthButton';
import NavBarButton from './NavBarButton';
import Image from 'next/image';
import { signOut, useSession } from "next-auth/react";
import LoginAuthDropdown from './LoginAuthDropdown';


const NavBar = () => {
    const { data: session, status } = useSession();

    return (
    <>
        <div className="justify-between navbar bg-base-100 shadow-md border border-gray-900 flex items-center px-2 py-4 rounded-lg">
            <div className="flex items-center space-x-2">
                <NavBarButton link={"/"}>
                    <Image src="/images/JobBucketLogo.png" alt="Logo" width={90} height={90}/>
                </NavBarButton>
                <NavBarButton link={"/"}>
                    JobBucket
                </NavBarButton>
            </div>
            <div className="flex items-center space px-8">
                
                {status === "loading" ? (
                    <div>Loading...</div>
                ) : session ? (
                    <AuthButton onClick={signOut}>
                        Sign Out
                    </AuthButton>
                ) : (
                    <LoginAuthDropdown text="Login"/>
                )}
            </div>
        </div>
    </>
    )
}

export default NavBar
