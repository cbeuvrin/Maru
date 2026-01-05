import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ICD de Riman: cómo funciona y por qué transformó mi rutina | Maru Cordero",
    description: "Descubre cómo la línea ICD de RIMAN y la tradición del K-Beauty transformaron mi rutina de skincare.",
};

export default function BlogPost() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center shadow-xl">
                <Image
                    src="/banner3.png" // Using the high quality banner
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
                        ICD de Riman: cómo funciona y por qué transformó mi rutina
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </div>
            </section>

            {/* Article Content */}
            <section className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xl text-gray-600 mb-8 font-light italic">
                        "Cuando comencé a conocer más a fondo la línea ICD de RIMAN, entendí que no se trataba solo de productos de skincare, sino de una propuesta integral basada en la tradición del K-Beauty y en la innovación científica. ICD es más que una rutina; es un ritual de cuidado que respeta la biología de la piel y potencia su luminosidad natural."
                    </p>

                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p>
                            La filosofía detrás de RIMAN y su línea Incellderm (ICD) se centra en la restauración y el fortalecimiento de la barrera cutánea. A diferencia de otros productos que actúan solo en la superficie, la tecnología de RIMAN permite que los ingredientes activos penetren en las capas más profundas de la piel, logrando cambios visibles y duraderos.
                        </p>

                        <h2 className="text-3xl font-serif text-black mt-12 mb-6">¿Qué hace única a la línea ICD?</h2>
                        <p>
                            Lo que realmente me enamoró fue la combinación de ingredientes naturales poderosos, como la Centella Asiática gigante (Byungpool), con ciencia avanzada. No contiene químicos agresivos ni rellenos innecesarios. Cada gota está pensada para nutrir, hidratar y revitalizar.
                        </p>
                        <p>
                            Al incorporar estos productos en mi día a día, noté cómo mi piel recuperaba su brillo, su elasticidad y su textura suave. No fue un cambio de la noche a la mañana, pero sí una transformación constante que me hizo creer plenamente en el poder de la constancia y de elegir lo mejor para mi piel.
                        </p>

                        <h2 className="text-3xl font-serif text-black mt-12 mb-6">Un ritual, no una obligación</h2>
                        <p>
                            Más allá de los resultados, RIMAN transformó mi perspectiva sobre el cuidado personal. Dejó de ser una tarea más en mi lista de pendientes para convertirse en un momento de conexión conmigo misma. Esos minutos frente al espejo son mi pausa, mi autocuidado y mi inversión en bienestar.
                        </p>
                        <p>
                            Si estás buscando algo más que una crema o un suero, si buscas una experiencia que combine tradición, ciencia y resultados reales, te invito a probar la línea ICD. Tu piel te lo agradecerá.
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
