import Image from "next/image";
import { Metadata } from "next";
import BlogSidebar from "@/components/BlogSidebar";
import BlogArticleFooter from "@/components/BlogArticleFooter";
import BlogFaqSection from "@/components/BlogFaqSection";

export const metadata: Metadata = {
    title: "ICD de Riman: cómo funciona y por qué transformó mi rutina | Maru Cordero",
    description: "Descubre cómo la línea ICD de RIMAN y la tradición del K-Beauty transformaron mi rutina de skincare.",
};

export default function BlogPost() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            {/* Header Section */}
            <div className="pt-32 pb-12 px-4 text-center bg-white">
                <span className="block text-sm tracking-[0.2em] uppercase mb-4 text-gray-500">Blog & Q&A</span>
                <h1 className="font-dancing text-4xl md:text-6xl mb-6 max-w-4xl mx-auto leading-tight text-black">
                    ICD de Riman: cómo funciona y por qué transformó mi rutina
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
                                src="/blog/post-2.jpg"
                                alt="ICD de Riman"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-xl text-gray-600 mb-8 font-light italic">
                            "Cuando comencé a conocer más a fondo la línea ICD de RIMAN, entendí que no se trataba solo de productos de skincare, sino de una propuesta integral basada en la tradición del K-Beauty y en la innovación científica. ICD está diseñada para cuidar la piel desde la raíz, respetando sus procesos naturales y fortaleciendo su equilibrio día a día."
                        </p>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-12">
                            <p>
                                Lo que hace especial a esta línea es la combinación de ingredientes de origen natural con tecnología avanzada. Activos como la Giant BYoungPool, conocida por sus propiedades regeneradoras y calmantes, y el Agua Energética de Lava de Jeju, rica en minerales esenciales, trabajan en conjunto para hidratar, nutrir y mejorar visiblemente la textura de la piel, sin agredirla.
                            </p>
                            <p>
                                Además, la tecnología de liposomas que utiliza RIMAN permite que estos ingredientes se absorban de manera más profunda y efectiva. En mi experiencia, esto se traduce en una piel más luminosa, firme y equilibrada, incluso con una rutina sencilla y constante. No se trata de hacer más, sino de hacerlo mejor.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                            {/* Vertical Image */}
                            <div className="relative w-full md:w-1/3 h-[500px] rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                                <Image
                                    src="/blog/icd-vertical.jpg"
                                    alt="Maru Cordero with ICD Products"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Text side by side */}
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:w-2/3">
                                <h2 className="text-2xl md:text-3xl font-serif text-black mt-0 mb-6">Un ritual consciente</h2>
                                <p className="mt-0">
                                    La línea ICD transformó mi rutina diaria porque me enseñó a ver el skincare como un ritual consciente y posible. Hoy sé que cuidar mi piel es una forma de cuidarme por dentro, y compartir esta experiencia con otras mujeres se ha convertido en parte de mi propósito.
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
                            title="ICD de Riman: cómo funciona y por qué transformó mi rutina"
                            url="icd-de-riman"
                        />
                        <BlogFaqSection />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <BlogSidebar currentSlug="icd-de-riman" />
                    </div>
                </div>
            </section>
        </div>
    );
}
