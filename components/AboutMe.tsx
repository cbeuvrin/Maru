import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
    return (
        <section className="container mx-auto px-4 py-20">
            <h2 className="font-dancing text-5xl text-center mb-16">
                Sobre Mí
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                {/* Left - Image Placeholder */}
                <div className="relative aspect-[3/4]">
                    <Image
                        src="/about-me-portrait.jpg"
                        alt="Sobre Mí - Maru Cordero"
                        fill
                        className="object-cover rounded-lg" // Added rounded-lg for better visual
                    />
                </div>

                {/* Right - Text Content */}
                <div className="space-y-6">
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">👸</span>
                            <span>50+ | Redefiniendo la belleza sin edad</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">💎</span>
                            <span>Businesswoman | Healthy & Beauty Mom</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-2xl">👩‍💻</span>
                            <span>Te ayudo a crear tu mejor versión 💵</span>
                        </li>
                    </ul>

                    <div className="pt-8">
                        <Link
                            href="/contacto"
                            className="inline-block bg-[var(--primary-beige)] text-[var(--text-dark)] px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-black hover:text-white transition-colors"
                        >
                            Quiero asesoria
                        </Link>
                    </div>

                    <div className="pt-8 text-sm leading-relaxed text-gray-600">
                        <h3 className="font-dancing text-3xl mb-4 text-black">Maru Cordero</h3>
                        <ul className="list-disc list-inside space-y-1 ml-4 marker:text-[var(--primary-beige)]">
                            <li>Mamá - Hermana - Amiga</li>
                            <li>Empresaria - Emprendedora - Inversionista</li>
                            <li>Líder de grupos de alto nivel social y empresarial.</li>
                            <li>Comunicóloga, influyente, embajadora de marcas de skincare & beauty</li>
                            <li>Deportista de alto rendimiento</li>
                            <li>Apasionada del Aprendizaje.</li>
                            <li>Amante de los Buenos Negocios.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
