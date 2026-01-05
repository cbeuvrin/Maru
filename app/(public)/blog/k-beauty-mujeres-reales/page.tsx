import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "K-Beauty para mujeres reales: cómo empezar sin complicaciones | Maru Cordero",
    description: "Descubre cómo adaptar los secretos del K-Beauty a tu vida diaria sin complicaciones.",
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
                        K-Beauty para mujeres reales: cómo empezar sin complicaciones
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </div>
            </section>

            {/* Article Content */}
            <section className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xl text-gray-600 mb-8 font-light italic">
                        "El K-Beauty no tiene por qué ser complicado. Se trata de entender tu piel y darle lo que necesita con productos de alta calidad y una rutina constante."
                    </p>

                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p>
                            Muchas veces pensamos que el cuidado de la piel coreano implica 10 pasos imposibles de seguir en nuestra ajetreada vida diaria. Sin embargo, la esencia del K-Beauty es la prevención y la hidratación.
                        </p>

                        <h2 className="text-3xl font-serif text-black mt-12 mb-6">Simplificando la rutina</h2>
                        <p>
                            Puedes empezar con lo básico: una buena limpieza, hidratación profunda y protección solar. La clave está en la consistencia y en escuchar a tu piel.
                        </p>
                        <p>
                            Conforme te sientas más cómoda, puedes ir integrando pasos como esencias o mascarillas, pero recuerda que menos es más cuando los productos son efectivos.
                        </p>

                        <h2 className="text-3xl font-serif text-black mt-12 mb-6">Resultados reales</h2>
                        <p>
                            La constancia es el secreto. Dedicarte unos minutos al día no solo mejora tu piel, sino que se convierte en un ritual de amor propio invaluable.
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
