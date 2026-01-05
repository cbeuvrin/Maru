import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
    title: "Blog - Q&A | Maru Cordero",
    description: "Reflexiones y preguntas frecuentes sobre emprendimiento y skincare con Maru Cordero.",
};

export default function BlogPage() {
    const faqs = [
        {
            question: "¿Cómo puedo contactarte si tengo más dudas?",
            answer: "Comunícate conmigo al proyectosnetworkmkt@gmail.com si no puedes encontrar una respuesta a tu pregunta. Puedes contactarme directamente a través del formulario, WhatsApp o redes sociales. Te ayudo a elegir los productos ideales y te guío durante todo el proceso para que inicies tu rutina con confianza."
        },
        {
            question: "¿Es posible generar ingresos con RIMAN?",
            answer: "Sí, es posible. RIMAN ofrece un modelo de negocio flexible que te permite generar ingresos desde casa compartiendo productos de alta calidad y construyendo relaciones auténticas. El crecimiento depende del compromiso, la constancia y el aprendizaje continuo."
        },
        {
            question: "¿Necesito experiencia previa para emprender?",
            answer: "No. No necesitas experiencia previa. RIMAN está pensado para mujeres reales que desean aprender, crecer y emprender a su propio ritmo. Yo te acompaño paso a paso, desde el conocimiento de los productos hasta la construcción de una rutina o un proyecto alineado a tus objetivos."
        },
        {
            question: "¿Cómo acompañas a tu comunidad?",
            answer: "Acompaño a mi comunidad de forma cercana y personalizada. Comparto mi experiencia, ofrezco orientación, espacios de networking y apoyo constante para que cada mujer avance con seguridad, claridad y propósito."
        },
        {
            question: "¿Los productos son aptos para pieles sensibles?",
            answer: "Sí. Las fórmulas de RIMAN están diseñadas para adaptarse a distintos tipos de piel, incluso pieles sensibles. Gracias a sus ingredientes naturales y tecnología avanzada, ayudan a fortalecer la barrera cutánea y a mantener la piel equilibrada."
        },
        {
            question: "¿Cuándo veré resultados?",
            answer: "Los resultados varían según cada persona y su constancia. Muchas mujeres notan cambios en hidratación y luminosidad en las primeras semanas. Los beneficios más visibles llegan con el uso constante y una rutina adecuada a las necesidades de tu piel."
        }
    ];

    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center shadow-xl">
                <Image
                    src="/banner3.png" // Using the high quality banner as placeholder
                    alt="Blog Background"
                    fill
                    className="object-cover object-left"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center text-white pt-20">
                    <h1 className="font-dancing text-6xl md:text-7xl mb-4">
                        Blog & Q&A
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 py-20">

                {/* Blog Grid Section - Moved to top */}
                <div className="max-w-7xl mx-auto mb-32">
                    <h2 className="font-dancing text-5xl text-center mb-12">Mi Blog</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Post 1 */}
                        <div className="group bg-white rounded-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                            <Link href="/blog/icd-de-riman" className="block relative h-64 overflow-hidden">
                                <Image
                                    src="/banner3.png"
                                    alt="ICD de Riman"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </Link>
                            <div className="p-6 flex flex-col flex-grow text-center">
                                <span className="text-xs text-gray-400 mb-2 block">24 de diciembre de 2025</span>
                                <Link href="/blog/icd-de-riman" className="block flex-grow">
                                    <h3 className="text-xl font-light mb-4 tracking-wide group-hover:text-[var(--accent-brown)] transition-colors">
                                        ICD de Riman: cómo funciona y por qué
                                    </h3>
                                </Link>
                                <Link href="/blog/icd-de-riman" className="text-sm text-[var(--accent-brown)] uppercase tracking-widest hover:text-black transition-colors mt-auto inline-block border-b border-transparent hover:border-black pb-1">
                                    Continuar leyendo
                                </Link>
                            </div>
                        </div>

                        {/* Post 2 */}
                        <div className="group bg-white rounded-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                            <Link href="/blog/k-beauty-mujeres-reales" className="block relative h-64 overflow-hidden">
                                <Image
                                    src="/banner3.png"
                                    alt="K-Beauty"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </Link>
                            <div className="p-6 flex flex-col flex-grow text-center">
                                <span className="text-xs text-gray-400 mb-2 block">24 de diciembre de 2025</span>
                                <Link href="/blog/k-beauty-mujeres-reales" className="block flex-grow">
                                    <h3 className="text-xl font-light mb-4 tracking-wide group-hover:text-[var(--accent-brown)] transition-colors">
                                        K-Beauty para mujeres reales: cómo
                                    </h3>
                                </Link>
                                <Link href="/blog/k-beauty-mujeres-reales" className="text-sm text-[var(--accent-brown)] uppercase tracking-widest hover:text-black transition-colors mt-auto inline-block border-b border-transparent hover:border-black pb-1">
                                    Continuar leyendo
                                </Link>
                            </div>
                        </div>

                        {/* Post 3 */}
                        <div className="group bg-white rounded-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                            <Link href="/blog/ingresos-desde-casa" className="block relative h-64 overflow-hidden">
                                <Image
                                    src="/banner3.png"
                                    alt="Ingresos desde casa"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </Link>
                            <div className="p-6 flex flex-col flex-grow text-center">
                                <span className="text-xs text-gray-400 mb-2 block">24 de diciembre de 2025</span>
                                <Link href="/blog/ingresos-desde-casa" className="block flex-grow">
                                    <h3 className="text-xl font-light mb-4 tracking-wide group-hover:text-[var(--accent-brown)] transition-colors">
                                        Cómo generar ingresos desde casa con RIMAN
                                    </h3>
                                </Link>
                                <Link href="/blog/ingresos-desde-casa" className="text-sm text-[var(--accent-brown)] uppercase tracking-widest hover:text-black transition-colors mt-auto inline-block border-b border-transparent hover:border-black pb-1">
                                    Continuar leyendo
                                </Link>
                            </div>
                        </div>

                        {/* Post 4 */}
                        <div className="group bg-white rounded-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                            <Link href="/blog/vida-con-proposito" className="block relative h-64 overflow-hidden">
                                <Image
                                    src="/banner3.png"
                                    alt="Vida con propósito"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </Link>
                            <div className="p-6 flex flex-col flex-grow text-center">
                                <span className="text-xs text-gray-400 mb-2 block">24 de diciembre de 2025</span>
                                <Link href="/blog/vida-con-proposito" className="block flex-grow">
                                    <h3 className="text-xl font-light mb-4 tracking-wide group-hover:text-[var(--accent-brown)] transition-colors">
                                        Crear una vida con propósito
                                    </h3>
                                </Link>
                                <Link href="/blog/vida-con-proposito" className="text-sm text-[var(--accent-brown)] uppercase tracking-widest hover:text-black transition-colors mt-auto inline-block border-b border-transparent hover:border-black pb-1">
                                    Continuar leyendo
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Reflections Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="font-dancing text-5xl mb-8">Reflexiones de Maru</h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Este espacio está diseñado para compartir ideas, aprendizajes y experiencias que han marcado mi camino.
                        Aquí encontrarás contenido pensado para inspirarte, ayudarte a crecer y acompañarte en tu proceso personal, profesional y emocional.
                    </p>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-dancing text-5xl text-center mb-12">Preguntas frecuentes</h2>

                    <FaqAccordion faqs={faqs} />
                </div>
            </section>
        </div>
    );
}
