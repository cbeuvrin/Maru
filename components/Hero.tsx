import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-[90vh] min-h-[600px] md:min-h-[700px] flex items-center shadow-2xl">
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
                <div className="w-full md:w-1/2 text-white text-left md:pl-12 pt-24 md:pt-32">
                    <span className="text-sm md:text-lg font-bold tracking-[0.2em] mb-2 block [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">BIENVENIDO</span>

                    {/* Title Removed */}

                    <div className="space-y-1 mb-10 pl-1">
                        <p className="text-2xl md:text-3xl tracking-wide uppercase font-light [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">Businesswoman</p>
                        <div className="w-12 h-[1px] bg-white/50 my-1 shadow-lg"></div>
                        <p className="text-2xl md:text-3xl tracking-wide uppercase font-light [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">Healthy & Beauty Mom</p>
                    </div>

                    <div className="mb-12">
                        <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">Embajadora</p>
                        <div className="relative">
                            <Image
                                src="/images/riman-logo.png"
                                alt="RIMAN"
                                width={1024}
                                height={458}
                                className="h-8 md:h-14 w-auto"
                            />
                        </div>
                    </div>

                    <Link
                        href="https://glowmaru.riman.com"
                        className="group relative inline-block pb-2 hover:text-[var(--primary-beige)] transition-colors duration-700 uppercase text-sm tracking-[0.2em] [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]"
                    >
                        Comprar conmigo
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transition-all duration-700 ease-in-out group-hover:w-0 shadow-md"></span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
