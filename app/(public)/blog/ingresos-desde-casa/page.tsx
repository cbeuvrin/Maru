import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cómo generar ingresos desde casa con RIMAN | Maru Cordero",
    description: "Aprende cómo construir un negocio flexible y rentable desde casa con RIMAN.",
};

export default function BlogPost() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center shadow-xl">
                <Image
                    src="/banner3.png"
                    alt="Blog Header"
                    fill
                    className="object-cover object-left"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <span className="block text-sm tracking-[0.2em] uppercase mb-4">Blog & Q&A</span>
                    <h1 className="font-dancing text-5xl md:text-7xl mb-6 max-w-4xl mx-auto leading-tight">
                        Cómo generar ingresos desde casa con RIMAN
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </div>
            </section>

            {/* Article Content */}
            <section className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xl text-gray-600 mb-8 font-light italic">
                        "Emprender desde casa es posible cuando tienes las herramientas correctas y una comunidad que te respalda. RIMAN ofrece esa oportunidad."
                    </p>

                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p>
                            El modelo de negocio de RIMAN está diseñado para adaptarse a tu estilo de vida. No necesitas descuidar tus otras responsabilidades para construir algo propio y rentable.
                        </p>

                        <h2 className="text-3xl font-serif text-black mt-12 mb-6">Flexibilidad y Crecimiento</h2>
                        <p>
                            Tú decides cuánto tiempo invertir. Ya sea que busques un ingreso extra o construir una carrera completa, el límite lo pones tú.
                        </p>
                        <p>
                            Lo mejor es que no estás sola. Contamos con un sistema de capacitación y apoyo constante para asegurarnos de que tengas todo lo necesario para triunfar.
                        </p>

                        <h2 className="text-3xl font-serif text-black mt-12 mb-6">Únete a nosotros</h2>
                        <p>
                            Si estás lista para tomar el control de tu futuro financiero mientras compartes bienestar, este es el momento ideal para comenzar.
                        </p>
                    </div>

                    {/* Author Signature */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <p className="font-dancing text-3xl text-right text-gray-800">- Maru Cordero</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
