"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface Product {
    name: string;
    image: string;
}

interface RoutineProps {
    id: string;
    title: string;
    description: string;
    forSkin: string;
    products: Product[];
}

export default function RoutineSection({ title, description, forSkin, products, id }: RoutineProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth * 0.6; // Scroll 60% of width
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <div id={id} className="py-24 border-b border-gray-100 last:border-0 scroll-mt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center max-w-6xl mx-auto">
                    {/* Text Content */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-[var(--primary-beige)] text-[var(--accent-brown)] bg-opacity-30">
                            {forSkin}
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl mb-6">{title}</h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            {description}
                        </p>
                    </div>

                    {/* Visuals - Product Carousel */}
                    <div className="w-full mb-12 relative group/carousel">

                        {/* Mobile Navigation Arrows */}
                        <button
                            onClick={() => scroll("left")}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg text-[var(--element-active)] hover:bg-[var(--primary-beige)] transition-colors md:hidden border border-gray-100"
                            aria-label="Scroll Left"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg text-[var(--element-active)] hover:bg-[var(--primary-beige)] transition-colors md:hidden border border-gray-100"
                            aria-label="Scroll Right"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>

                        {/* Scroll Container */}
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto space-x-8 pb-8 justify-start md:justify-center snap-x hide-scrollbar px-12 md:px-4"
                        >
                            {products.map((prod, idx) => (
                                <div key={idx} className="flex-shrink-0 w-48 flex flex-col items-center snap-center group">
                                    {prod.image && (
                                        <div className="relative w-full h-48 mb-6 transition-transform duration-500 group-hover:scale-105">
                                            <Image
                                                src={prod.image}
                                                alt={prod.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                    <p className="text-center text-xs font-bold uppercase tracking-wide text-gray-800 leading-tight">
                                        {prod.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Link
                        href="https://glowmaru.riman.com"
                        target="_blank"
                        className="inline-block bg-[var(--accent-brown)] text-white px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-black transition-all duration-300 rounded-sm"
                    >
                        Comprar esta Rutina
                    </Link>
                </div>
            </div>
        </div>
    );
}
