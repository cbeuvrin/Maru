"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const CAROUSEL_IMAGES = [
    "/carousel/image1.jpg",
    "/carousel/image2.jpg",
    "/carousel/image3.png",
    "/carousel/image4.jpg",
    "/carousel/image5.jpg",
];

export default function LifeInMotion() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth * 0.8; // Scroll 80% of width
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    // Update active index on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const { scrollLeft, clientWidth } = scrollRef.current;
                const index = Math.round(scrollLeft / (clientWidth * 0.8)); // Approximate
                // This is a rough approximation for dots, exact intersection observer is better but this is simple enough for now
            }
        };
        scrollRef.current?.addEventListener("scroll", handleScroll);
        return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="bg-[var(--primary-beige)] py-20 text-center overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="font-dancing text-5xl mb-8">
                    Mi vida en movimiento
                </h2>

                <div className="relative group max-w-7xl mx-auto">
                    {/* Carousel Container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {CAROUSEL_IMAGES.map((src, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[85%] md:w-[45%] lg:w-[30%] h-[400px] relative snap-center rounded-2xl overflow-hidden shadow-xl"
                            >
                                <Image
                                    src={src}
                                    alt={`Life in Motion ${index + 1}`}
                                    fill
                                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white shadow-lg transition-all z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white shadow-lg transition-all z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                <p className="text-sm uppercase tracking-widest mt-8 opacity-60">
                    Desliza para ver más
                </p>
            </div>
        </section>
    );
}
