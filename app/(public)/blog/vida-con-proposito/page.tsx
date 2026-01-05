import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Crear una vida con propósito | Maru Cordero",
    description: "Reflexiones sobre cómo alinear tus acciones diarias con tu verdadero propósito.",
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
                        Crear una vida con propósito
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </div>
            </section>

            {/* Article Content */}
            <section className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xl text-gray-600 mb-8 font-light italic">
                        "Vivir con propósito no es un destino, es una elección diaria. Es encontrar significado en lo que hacemos y compartirlo con los demás."
                    </p>

                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p>
                            Muchas veces nos dejamos llevar por la inercia del día a día, olvidando qué es lo que realmente nos mueve. Detenerse a reflexionar es el primer paso para redirigir el rumbo.
                        </p>

                        <h2 className="text-3xl font-serif text-black mt-12 mb-6">Alineación y coherencia</h2>
                        <p>
                            Cuando tus acciones, tus valores y tus metas están alineados, todo fluye con mayor naturalidad. El trabajo deja de ser una carga y se convierte en una extensión de quien eres.
                        </p>
                        <p>
                            Buscar un propósito no significa cambiar radicalmente tu vida de un día para otro, sino hacer pequeños ajustes que te acerquen a la versión de ti misma que deseas ser.
                        </p>

                        <h2 className="text-3xl font-serif text-black mt-12 mb-6">Impacto positivo</h2>
                        <p>
                            Al final, una vida con propósito es aquella que deja una huella positiva en quienes te rodean. Tu crecimiento personal inspira el crecimiento de los demás.
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
