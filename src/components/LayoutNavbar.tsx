import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";

export const LayoutNavbar = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const navItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        },
        {
            title: "Login",
            href: "/login",
        },
    ];
    return (
        <div className="py-40">
            <nav className="max-w-4xl mx-auto">
                <nav className="mx-auto flex justify-center bg-slate-800 text-slate-100 rounded-full">
                    {navItems.map((item, idx) => <NavLink
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                        className={"relative p-2 px-10 py-4"}
                        // className={({ isActive }) => (isActive ? "bg-orange-200 text-slate-800 p-2 rounded-full" : "p-2 hover:bg-slate-700/50 rounded-full")}
                        to={item.href}
                        key={item.title}
                    >
                        {idx === hovered && <motion.span layoutId="hover" className="bg-orange-500 absolute inset-0 rounded-full"></motion.span>}
                        <span className="relative">{item.title}</span>
                    </NavLink>)}
                </nav>
            </nav>
        </div>
    );
};