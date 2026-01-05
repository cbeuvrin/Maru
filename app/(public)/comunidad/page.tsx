import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comunidad | Maru Cordero",
    description: "Únete a una comunidad de mujeres emprendedoras y descubre el poder del networking.",
};

export default function ComunidadPage() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center shadow-xl">
                <Image
                    src="/banner3.png" // Placeholder or specific community banner
                    alt="Comunidad Header"
                    fill
                    className="object-cover object-left"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <span className="block text-sm tracking-[0.2em] uppercase mb-4">Networking</span>
                    <h1 className="font-dancing text-5xl md:text-7xl mb-6 max-w-4xl mx-auto leading-tight">
                        Bienvenido a mi comunidad
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl text-gray-700 leading-relaxed font-light italic mb-8">
                        "Creo profundamente en el poder de las mujeres cuando se unen para un bien común. A lo largo de mi camino como emprendedora, he descubierto que el verdadero crecimiento no solo nace del esfuerzo individual, sino de la tribu con la que caminamos."
                    </p>
                    <p className="text-lg text-gray-600">
                        Por eso, he creado un espacio donde las mujeres puedan inspirarse, aprender, compartir y construir juntas.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-sm tracking-[0.2em] text-gray-500 uppercase block mb-4">MI Misión</span>
                            <h2 className="font-serif text-4xl mb-6">Unidas somos más fuertes</h2>
                            <div className="prose prose-lg text-gray-600 space-y-4">
                                <p>
                                    Mi misión es acompañar a más mujeres a descubrir su fuerza, su voz y su capacidad de crear oportunidades. A través de mentorías, consejos prácticos y espacios de diálogo, comparto mi experiencia como madre, empresaria y mujer resiliente para impulsar su desarrollo personal y profesional.
                                </p>
                                <p>Aquí, cada mujer encuentra:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Motivación y herramientas para emprender.</li>
                                    <li>Inspiración para reinventarse.</li>
                                    <li>Un ambiente seguro para crecer.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/fondo42.png" // Placeholder
                                alt="Misión"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-dancing text-5xl mb-12">Eventos y encuentros de networking</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        A lo largo del año organizo encuentros presenciales y virtuales, diseñados para conectar a mujeres emprendedoras, profesionales y líderes que desean expandir su red y aprender unas de otras.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="font-serif text-xl mb-2">Demostraciones</h3>
                            <p className="text-gray-500">Demostraciones del Producto y Negocio</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="font-serif text-xl mb-2">Charlas</h3>
                            <p className="text-gray-500">Charlas motivacionales</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="font-serif text-xl mb-2">Networking</h3>
                            <p className="text-gray-500">Reuniones de networking estratégico</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 className="font-serif text-xl mb-2">Talleres</h3>
                            <p className="text-gray-500">Talleres de crecimiento personal</p>
                        </div>
                    </div>

                    <p className="mt-12 text-xl font-dancing text-gray-800">
                        Son eventos llenos de energía, colaboración y sororidad.
                    </p>
                </div>
            </section>

            {/* Join Section */}
            <section className="bg-[var(--accent-brown)] text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <span className="block text-sm tracking-[0.2em] uppercase mb-4 opacity-80">Forma parte</span>
                    <h2 className="font-dancing text-5xl md:text-6xl mb-8">Únete a mi comunidad</h2>
                    <p className="text-xl max-w-2xl mx-auto mb-12 opacity-90 font-light">
                        Si buscas un espacio donde sentirte acompañada, conectada y motivada a crecer, este lugar es para ti.
                        Te invito a formar parte de una comunidad que cree en el trabajo constante, en la disciplina, en el bienestar y en la fuerza femenina.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-block border-2 border-white px-10 py-3 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Quiero unirme
                    </Link>
                </div>
            </section>
        </div>
    );
}
