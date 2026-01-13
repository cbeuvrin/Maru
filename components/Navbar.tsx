"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Skincare & Riman", href: "/skincare-riman" },
    { name: "Comunidad", href: "/comunidad" },
    { name: "Blog - Q&A", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Check if we are on a specific blog post page (not the main blog listing)
    const isBlogPost = pathname?.startsWith('/blog/') && pathname !== '/blog';
    const forceDarkNav = isBlogPost;

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

    // Toggle scroll lock when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

    const isLightMode = scrolled || mobileMenuOpen || forceDarkNav;

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isLightMode ? "bg-white shadow-md py-4" : "bg-transparent py-8"
                }`}
        >
            {/* Full width container */}
            <div className="w-full px-4 md:px-8 flex flex-row items-center justify-between">

                {/* Logo Section (Left) */}
                <div className="flex items-center gap-3 p-2 transition-all duration-300 relative z-50">
                    <Link href="/">
                        <div className="relative w-[150px] md:w-[200px] h-[40px] md:h-[60px] flex items-center justify-start">
                            <Image
                                src={isLightMode ? "/logo-black-final.png" : "/logo-white-final.png"}
                                alt="Maru Cordero Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>
                    <a
                        href="https://www.instagram.com/marucorderovieyra/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors duration-300 ${isLightMode ? "text-black hover:text-[var(--accent-brown)]" : "text-white/90 hover:text-white"}`}
                        aria-label="Instagram"
                    >
                        <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                </div>

                {/* Desktop Navigation (Right) */}
                <nav className="hidden md:block">
                    <ul className="flex flex-wrap gap-8 items-center justify-end">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`text-sm tracking-wide transition-colors uppercase font-medium ${isLightMode
                                        ? "text-black hover:text-[var(--accent-brown)]"
                                        : "text-white/90 hover:text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.6)]"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden relative z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                        <span className={`block w-6 h-0.5 transition-all duration-300 ${isLightMode ? "bg-black" : "bg-white"} ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`block w-6 h-0.5 transition-all duration-300 ${isLightMode ? "bg-black" : "bg-white"} ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block w-6 h-0.5 transition-all duration-300 ${isLightMode ? "bg-black" : "bg-white"} ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <ul className="flex flex-col gap-8 text-center">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-serif text-gray-900 hover:text-[var(--accent-brown)] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </header>
    );
}
