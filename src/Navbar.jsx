import React from 'react'
import { LogoIcon } from './Icons';
import { Link, NavLink } from 'react-router';


export const Navbar = () => {
    return (
        <>

            <div className="navbar bg-primary text-primary-content px-4">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl" href="/">
                        <img src="/favicon.ico" alt="Logo" />
                        EcoBite</a>
                </div>
                <div className="flex-none space-x-4 mx-8">
                    <NavLink to="/" className="btn btn-ghost">Home</NavLink>
                    <NavLink to="/product" className="btn btn-ghost">Products</NavLink>
                    <NavLink to="/about" className="btn btn-ghost">About</NavLink>
                    <NavLink to="/contact" className="btn btn-ghost">Contact</NavLink>
                </div>
                <div className="flex gap-4">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-zinc-100 hover:bg-[#c52243] hover:text-[White] text-black text-base font-bold leading-normal tracking-[-0.015em] transition-colors duration-200">
                        <span class="truncate">Log In</span>
                    </button>
                    <Link to="/product" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[#22c55e] hover:bg-[#285e3c] text-white text-base font-bold leading-normal tracking-[-0.015em] transition-colors duration-200"><span class="truncate">Shop Now</span></Link>
                </div>
            </div>
        </>
    )
}
