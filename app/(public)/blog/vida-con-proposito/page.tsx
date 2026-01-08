import Image from "next/image";
import { Metadata } from "next";
import BlogSidebar from "@/components/BlogSidebar";
import BlogArticleFooter from "@/components/BlogArticleFooter";
import BlogFaqSection from "@/components/BlogFaqSection";

export const metadata: Metadata = {
    title: "Crear una vida con propósito | Maru Cordero",
    description: "Reflexiones sobre cómo alinear tus acciones diarias con tu verdadero propósito.",
};

export default function BlogPost() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            {/* Header Section */}
            <div className="pt-32 pb-12 px-4 text-center bg-white">
                <span className="block text-sm tracking-[0.2em] uppercase mb-4 text-gray-500">Blog & Q&A</span>
                <h1 className="font-dancing text-4xl md:text-6xl mb-6 max-w-4xl mx-auto leading-tight text-black">
                    Crear una vida con propósito
                </h1>
                <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>

            {/* Article Content */}
            {/* Article Content */}
            <section className="container mx-auto px-4 py-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/blog/post-4.jpg"
                                alt="Living with Purpose"
                                fill
                                className="object-cover object-[center_20%]"
                            />
                        </div>

                        <p className="text-xl text-gray-600 mb-8 font-light italic">
                            "Para mí, crear una vida con propósito significa vivir con intención y coherencia, incluso cuando no todo está claro. No se trata de tener la vida resuelta, sino de elegir todos los días aquello que me acerca a la mujer que quiero ser, honrando mis valores, mis aprendizajes y mi historia."
                        </p>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                            <p>
                                He aprendido que el propósito no llega de golpe; se construye con el esfuerzo diario, con hábitos conscientes y con la decisión de crecer aun en medio de los retos. Cada pequeño paso cuenta y cada etapa de la vida trae consigo una oportunidad para reinventarnos y volver a empezar.
                            </p>

                            <h2 className="text-3xl font-serif text-black mt-12 mb-6">Crecimiento como amor propio</h2>
                            <p>
                                Creo profundamente en el crecimiento personal como un acto de amor propio. Cuidar de mí, aprender, leer, mover mi cuerpo y rodearme de personas que suman ha sido clave para sentirme plena y en equilibrio. Cuando trabajamos en nosotras mismas, todo a nuestro alrededor comienza a transformarse.
                            </p>

                            <p>
                                Hoy elijo vivir con propósito, compartir lo que me inspira y recordarle a otras mujeres que nunca es tarde para crear la vida que desean. Si este mensaje conecta contigo, te invito a unirte a mi comunidad, seguir mis reflexiones y dar juntas el siguiente paso hacia una vida más plena y consciente.
                            </p>

                            <div className="bg-[var(--accent-brown)]/10 p-6 rounded-xl mt-8 border-l-4 border-[var(--accent-brown)]">
                                <p className="font-medium text-lg text-gray-800 mb-0">
                                    ¡Te invito a que te sumes a mi comunidad y me permitas acompañarte a construir tu nueva mejor versión!
                                </p>
                            </div>
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
                            title="Crear una vida con propósito"
                            url="vida-con-proposito"
                        />
                        <BlogFaqSection />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <BlogSidebar currentSlug="vida-con-proposito" />
                    </div>
                </div>
            </section>
        </div>
    );
}
