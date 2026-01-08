import Image from "next/image";
import { Metadata } from "next";
import BlogSidebar from "@/components/BlogSidebar";
import BlogArticleFooter from "@/components/BlogArticleFooter";
import BlogFaqSection from "@/components/BlogFaqSection";

export const metadata: Metadata = {
    title: "K-Beauty para mujeres reales: cómo empezar sin complicaciones | Maru Cordero",
    description: "Descubre cómo adaptar los secretos del K-Beauty a tu vida diaria sin complicaciones.",
};

export default function BlogPost() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            {/* Header Section */}
            <div className="pt-32 pb-12 px-4 text-center bg-white">
                <span className="block text-sm tracking-[0.2em] uppercase mb-4 text-gray-500">Blog & Q&A</span>
                <h1 className="font-dancing text-4xl md:text-6xl mb-6 max-w-4xl mx-auto leading-tight text-black">
                    K-Beauty para mujeres reales: cómo empezar sin complicaciones
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
                                src="/blog/post-1.jpg"
                                alt="K-Beauty Routine"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-xl text-gray-600 mb-8 font-light italic">
                            "Durante mucho tiempo pensé que el K-Beauty era complicado y solo para pieles perfectas. Con el tiempo descubrí que, en realidad, se trata de escuchar a tu piel y crear una rutina consciente, posible y constante. El skincare coreano no es una moda, es una filosofía que nos invita a cuidarnos con intención y a entender que la belleza se construye con hábitos diarios."
                        </p>



                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-12">
                            <p>
                                Para mí, una rutina efectiva comienza con una limpieza suave pero profunda, utilizando productos que respeten la piel y la preparen para absorber mejor los siguientes pasos. Aquí descubrí la importancia de fórmulas bien equilibradas, como las que integran ingredientes regeneradores e hidratantes, similares a las que uso en mi rutina diaria con RIMAN, especialmente en la fase de limpieza y preparación de la piel.
                            </p>

                            <p>
                                Después de limpiar, la hidratación y el tratamiento son clave. Sérums y cremas que ayuden a fortalecer la barrera cutánea, mejorar la luminosidad y aportar firmeza hacen una gran diferencia cuando se usan con constancia. En mi experiencia, las fórmulas inspiradas en el K-Beauty, como las de la línea ICD de RIMAN, permiten nutrir la piel sin saturarla, respetando sus procesos naturales.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                            {/* Vertical Image */}
                            <div className="relative w-full md:w-1/3 h-[500px] rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                                <Image
                                    src="/blog/k-beauty-vertical.jpg"
                                    alt="Maru Cordero K-Beauty Ritual"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Text side by side */}
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:w-2/3">
                                <h2 className="text-2xl md:text-3xl font-serif text-black mt-0 mb-6">Un ritual personal</h2>
                                <p className="mt-0">
                                    Si estás comenzando, mi recomendación es simple: empieza poco a poco, escucha a tu piel y convierte tu rutina en un ritual personal. Cuidar tu piel es regalarte unos minutos al día solo para ti, porque una piel bien cuidada refleja equilibrio, bienestar y amor propio.
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
                            title="K-Beauty para mujeres reales: cómo empezar sin complicaciones"
                            url="k-beauty-mujeres-reales"
                        />
                        <BlogFaqSection />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <BlogSidebar currentSlug="k-beauty-mujeres-reales" />
                    </div>
                </div>
            </section>
        </div>
    );
}
