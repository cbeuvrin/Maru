import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-[90vh] min-h-[700px] flex items-center shadow-2xl">
            {/* Background Image */}
            <Image
                src="/fondo43.png"
                alt="Maru Cordero Background"
                fill
                className="object-cover"
                priority
                quality={100}
            />

            {/* Gradient Overlay for text readability - stops at 50% to avoid covering the person */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_50%)]"></div>

            {/* Content */}
            <div className="relative z-10 w-full container mx-auto px-4 h-full flex items-center">
                <div className="w-full md:w-1/2 text-white text-left md:pl-12 pt-32">
                    <span className="text-lg font-bold tracking-[0.2em] mb-2 block">BIENVENIDO</span>

                    {/* Title Removed */}

                    <div className="space-y-1 mb-10 pl-1">
                        <p className="text-3xl tracking-wide uppercase font-light">Businesswoman</p>
                        <div className="w-12 h-[1px] bg-white/50 my-1"></div>
                        <p className="text-3xl tracking-wide uppercase font-light">Healthy & Beauty Mom</p>
                    </div>

                    <div className="mb-12">
                        <p className="text-xs tracking-[0.3em] uppercase mb-2">Embajadora</p>
                        <p className="font-serif text-3xl tracking-widest font-bold text-[var(--primary-beige)]">RIMAN</p>
                    </div>

                    <Link
                        href="https://glowmaru.riman.com"
                        className="group relative inline-block pb-2 hover:text-[var(--primary-beige)] transition-colors duration-700 uppercase text-sm tracking-[0.2em]"
                    >
                        Comprar conmigo
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transition-all duration-700 ease-in-out group-hover:w-0"></span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
