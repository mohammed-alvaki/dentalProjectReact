import React, { useState } from 'react';
import '../../App.css';
import { Button, Drawer } from "flowbite-react";
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    return (
        <header id='header-section'>
            <div className="w-full flex items-center py-3">
                <div className="w-full xl:w-10/12 xl:mx-auto">
                    <div className="flex justify-between items-center px-4 xl:px-0">
                        <h2 className="logo text-2xl font-bold">DentalCare Plus</h2>
                        <Button onClick={() => setIsOpen(true)} className='btn-toggler md:hidden bg-transparent'>
                            <div className="my-toggler flex flex-col gap-1">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Button>
                        <nav className='hidden md:block '>
                            <ul className='flex items-center h-full gap-4 unstyle'>
                                <li className="nav-item">
                                    <a className="nav-link transition duration-200" href="#header-section" onClick={handleClose}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link transition duration-200" href="#benefits-section" onClick={handleClose}>Benefits</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link transition duration-200" href="#contact-section" onClick={handleClose}>Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <Drawer open={isOpen} onClose={handleClose} position="right" className='duration-500 w-[300px]'>
                <Drawer.Header
                    title={<h5 className="text-2xl text-blue-600 ">DentalCare Plus</h5>}
                    titleIcon={() => <></>}
                    className='text-2xl' />

                <Drawer.Items>
                    <ul>
                        <li className="nav-item mb-3">
                            <a className="nav-link transition duration-200" href="/" onClick={handleClose}>About</a>
                        </li>
                        <li className="nav-item mb-3">
                            <a className="nav-link transition duration-200" href="#benefits-section" onClick={handleClose}>Benefits</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link transition duration-200" href="#contact-section" onClick={handleClose}>Contact</a>
                        </li>
                    </ul>
                </Drawer.Items>
            </Drawer>
        </header>
    )
}

export default Header;
