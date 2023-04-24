"use client"
import Link from 'next/link';
import { useAuth } from '@/app/api/auth';
import LogoutButton from '@/app/auth/logout/logout';
import { useState } from 'react';
import Image from 'next/image';

function Navbar() {
    const { user } = useAuth();
    console.log(user)
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const MenuItems = () => (
        <>
            <Link
                href="/"
                passHref
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
                Home
            </Link>
            {user ? (
                <>
                    <Link
                        href={`/profile?uid=${user.providerData[0].uid}`}
                        passHref
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    >
                        <Image src={user.photoURL} width={36} height={36} alt={user.email} className="rounded-full inline"/> {user.email} 
                    </Link>
                    <LogoutButton />
                </>
            ) : (
                <Link
                    href="/auth/login"
                    passHref
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >
                    Sign in
                </Link>
            )}
        </>
    );

    return (
        <nav className="bg-gray-800">
            <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-white text-2xl font-bold">
                            My App
                        </Link>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                            onClick={toggleSidebar}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex items-center">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <MenuItems />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${isOpen ? "block" : "hidden"
                    } md:hidden absolute top-16 inset-x-0 p-2 transition transform origin-top-right`}
            >
                <div className="rounded-lg shadow-md bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5 space-y-6 flex flex-col">
                        <MenuItems />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
