"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Skincare & Riman", href: "/skincare-riman" },
    { name: "Comunidad", href: "/comunidad" },
    { name: "Blog - Q&A", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-8"
                }`}
        >
            {/* Full width container */}
            <div className="w-full px-8 flex flex-row items-center justify-between">

                {/* Logo Section (Left) */}
                <div className="p-2 transition-all duration-300">
                    <div className="relative w-[200px] h-[60px] flex items-center justify-start">
                        <Image
                            src={scrolled ? "/logo-black-final.png" : "/logo-white-final.png"}
                            alt="Maru Cordero Logo"
                            width={300}
                            height={100}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Navigation (Right) */}
                <nav>
                    <ul className="flex flex-wrap gap-8 items-center justify-end">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`text-sm tracking-wide transition-colors uppercase font-medium ${scrolled
                                        ? "text-black hover:text-[var(--accent-brown)]"
                                        : "text-white/90 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
        </header>
    );
}
