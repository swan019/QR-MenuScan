"use client";
import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelector } from 'react-redux';

function Navbar() {
    const [openNav, setOpenNav] = React.useState(false);
    const user = useSelector((state) => state.user);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="bg-slate-700 min-h-20  text-white flex justify-between rounded-md items-center p-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-2xl font-bold">QR MenuScan</div>
            <div className="hidden md:flex space-x-4">
                <Link href="/">
                    <div>Explore</div>
                </Link>

                {user.active ? (
                    <Link href={`/dashbord/${user.id}`}>
                        <div>Dashboard</div>
                    </Link>
                ) : (

                    <div className='flex gap-5'>
                        <Link href="/addStore">
                            <div>Add Store</div>
                        </Link>

                        <Link href="/login">
                            <div>Login</div>
                        </Link>
                    </div>
                )}


            </div>
            <div className="md:hidden z-[100]">
                <button onClick={() => setOpenNav(!openNav)}>
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6 " />
                    ) : (
                        <Bars3Icon className="h-6 w-6" />
                    )}
                </button>
            </div>

            {openNav && (
                <div className="absolute top-0 left-0 w-full bg-slate-700 md:hidden">
                    <div className="flex flex-col space-y-2 p-4">

                        {user.active ? (
                            <>
                                <Link href={`/`}>
                                    <div className=''>Explore</div>
                                </Link>
                                <Link href={`/dashbord/${user.id}`}>
                                    <div>Dashboard</div>
                                </Link>
                            </>
                        ) : (

                            <div className='flex gap-5'>
                                <Link href="/">
                                    <div>Explore</div>
                                </Link>
                                <Link href="/addStore">
                                    <div>Add Store</div>
                                </Link>

                                <Link href="/login">
                                    <div>Login</div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;