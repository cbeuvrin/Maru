import Image from "next/image";
import { Metadata } from "next";
import BlogSidebar from "@/components/BlogSidebar";
import BlogArticleFooter from "@/components/BlogArticleFooter";
import BlogFaqSection from "@/components/BlogFaqSection";

export const metadata: Metadata = {
    title: "Cómo generar ingresos desde casa con RIMAN | Maru Cordero",
    description: "Aprende cómo construir un negocio flexible y rentable desde casa con RIMAN.",
};

export default function BlogPost() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            {/* Header Section */}
            <div className="pt-32 pb-12 px-4 text-center bg-white">
                <span className="block text-sm tracking-[0.2em] uppercase mb-4 text-gray-500">Blog & Q&A</span>
                <h1 className="font-dancing text-4xl md:text-6xl mb-6 max-w-4xl mx-auto leading-tight text-black">
                    Cómo generar ingresos desde casa con RIMAN
                </h1>
                <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>

            {/* Article Content */}
            <section className="container mx-auto px-4 py-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/blog/post-3.jpg"
                                alt="Business Opportunity"
                                fill
                                className="object-cover object-[center_20%]"
                            />
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-12">
                            <p>
                                "Durante muchos años vi el networkmarketing con dudas, hasta que entendí que no se trata de vender, sino de construir relaciones, compartir experiencias reales y crear valor. Mi acercamiento a RIMAN nació desde la autenticidad: usar los productos, vivir los resultados y recomendar desde la experiencia personal."
                            </p>
                            <p>
                                Lo que me hizo confiar en este modelo de negocio es que permite generar ingresos desde casa de forma flexible, alineando el trabajo con la vida personal y familiar. A través del uso consciente de redes sociales, el acompañamiento a otras mujeres y el aprendizaje constante, he descubierto una forma de emprender que se adapta a distintas etapas de la vida.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                            {/* Vertical Image */}
                            <div className="relative w-full md:w-1/3 h-[500px] rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                                <Image
                                    src="/blog/ingresos-vertical.jpg"
                                    alt="Maru Cordero Business Growth"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>

                            {/* Text side by side */}
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:w-2/3">
                                <h2 className="text-2xl md:text-3xl font-serif text-black mt-0 mb-6">Crecimiento integral</h2>
                                <p className="mt-0">
                                    RIMAN ofrece un sistema claro, productos de alta calidad y una comunidad que impulsa el crecimiento personal y profesional. El network marketing, bien entendido, es una herramienta poderosa para desarrollar habilidades como comunicación, liderazgo y disciplina, mientras construyes un negocio propio con propósito.
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                            <p>
                                Mi experiencia me ha enseñado que este camino no es inmediato ni mágico, pero sí real y posible para quienes están dispuestas a aprender, ser constantes y trabajar con ética.
                                Generar ingresos desde casa con RIMAN ha sido una oportunidad para crecer, aportar valor y acompañar a otras mujeres a crear su propio camino.
                            </p>
                        </div>

                        <div className="bg-[var(--accent-brown)]/10 p-6 rounded-xl mt-8 border-l-4 border-[var(--accent-brown)]">
                            <p className="font-medium text-lg text-gray-800 mb-0">
                                ¡No lo pienses mas!! ¡Sé parte de mi equipo y descubre cuánto más es posible para ti!
                            </p>
                        </div>

                        {/* Author Signature */}
                        <div className="mt-16 pt-8 border-t border-gray-200">
                            <p className="font-dancing text-2xl text-right text-gray-800 mb-2">Con cariño,</p>
                            <p className="font-dancing text-3xl text-right text-gray-800 mb-4">- Maru Cordero</p>
                            <div className="text-right text-sm text-gray-500 italic">
                                <p>Mujer emprendedora · Mamá · Apasionada del crecimiento personal</p>
                                <p>Inspirando a más mujeres a crear una vida con propósito</p>
                            </div>
                        </div>

                        <BlogArticleFooter
                            title="Cómo generar ingresos desde casa con RIMAN"
                            url="ingresos-desde-casa"
                        />
                        <BlogFaqSection />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <BlogSidebar currentSlug="ingresos-desde-casa" />
                    </div>
                </div>
            </section >
        </div >
    );
}
