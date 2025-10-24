import React, { useState, useRef, useEffect } from "react";
// Assuming Link and NavLink from 'react-router-dom' based on usage
import { Link, NavLink } from 'react-router-dom'; 

// Removed unused import: import { LogoIcon } from './Icons';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Close sidebar when clicking/touching outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click is outside the sidebar AND the button that opens it
            // We need to exclude the button that opens it to avoid an immediate close when opening.
            const isMenuButton = event.target.closest('#mobile-menu-button');
            
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !isMenuButton) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
            // Prevent body scrolling when the sidebar is open
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
            // Restore body scrolling
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
            document.body.style.overflow = 'unset'; // Cleanup on unmount
        };
    }, [menuOpen]);

    // Function to close menu on link click
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-primary text-primary-content shadow-md z-50">
            <div className="flex justify-between items-center p-4">
                {/* Logo and Branding */}
                <div className="flex-1">
                    {/* Adjusted className from the second component to match the first's structure */}
                    <Link to="/" className="btn btn-ghost text-xl">
                        <img src="/favicon.ico" alt="Logo" className="h-6 w-6 inline-block mr-2" />
                        EcoBite
                    </Link>
                </div>

                {/* Desktop Menu - Hidden on small screens */}
                <div className="hidden md:flex flex-none space-x-4 mx-8 items-center">
                    <NavLink to="/" className="btn btn-ghost">Home</NavLink>
                    <NavLink to="/product" className="btn btn-ghost">Products</NavLink>
                    <NavLink to="/about" className="btn btn-ghost">About</NavLink>
                    <NavLink to="/contact" className="btn btn-ghost">Contact</NavLink>
                </div>

                {/* Desktop Action Buttons - Hidden on small screens */}
                <div className="hidden md:flex gap-4 items-center">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-zinc-100 hover:bg-[#c52243] hover:text-white text-black text-base font-bold leading-normal tracking-[-0.015em] transition-colors duration-200">
                        <span className="truncate">Log In</span>
                    </button>
                    <Link to="/product" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[#22c55e] hover:bg-[#285e3c] text-white text-base font-bold leading-normal tracking-[-0.015em] transition-colors duration-200"><span className="truncate">Shop Now</span></Link>
                </div>

                {/* Mobile Menu Button - Visible on small screens */}
                <button
                    id="mobile-menu-button" // Added ID for exclusion in handleClickOutside
                    className="md:hidden p-2 text-primary-content"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        // Close Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Menu Icon (Hamburger)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Sidebar Overlay (dark background) */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40" onClick={handleLinkClick}></div>
            )}

            {/* Mobile Sidebar Menu */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 right-0 h-full w-4/5 sm:w-2/3 bg-primary text-primary-content shadow-lg transform ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out md:hidden z-50`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h2 className="text-xl font-black uppercase">EcoBite Menu</h2>
                    <button onClick={handleLinkClick}>
                        {/* Close Icon in Sidebar */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <ul className="flex flex-col gap-4 mt-6 p-4 uppercase text-lg font-bold">
                    <li><NavLink to="/" className="block p-2 hover:text-secondary" onClick={handleLinkClick}>Home</NavLink></li>
                    <li><NavLink to="/product" className="block p-2 hover:text-secondary" onClick={handleLinkClick}>Products</NavLink></li>
                    <li><NavLink to="/about" className="block p-2 hover:text-secondary" onClick={handleLinkClick}>About</NavLink></li>
                    <li><NavLink to="/contact" className="block p-2 hover:text-secondary" onClick={handleLinkClick}>Contact</NavLink></li>

                    {/* Mobile Action Buttons */}
                    <li className="mt-4">
                        <button className="w-full text-left flex items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-zinc-100 hover:bg-[#c52243] hover:text-white text-black text-base font-bold leading-normal tracking-[-0.015em] transition-colors duration-200">
                            <span className="truncate">Log In</span>
                        </button>
                    </li>
                    <li>
                        <Link to="/product" className="w-full text-left flex items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[#22c55e] hover:bg-[#285e3c] text-white text-base font-bold leading-normal tracking-[-0.015em] transition-colors duration-200">
                            <span className="truncate">Shop Now</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}