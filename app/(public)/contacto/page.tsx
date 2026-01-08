import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | Maru Cordero",
    description: "Comunícate conmigo. Me encantará conocerte y acompañarte en tu camino.",
};

export default function ContactPage() {
    return (
        <div className="bg-white">
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center shadow-xl">
                <Image
                    src="/contacto/fondo-comunicate-2.png"
                    alt="Contacto Background"
                    fill
                    className="object-cover object-left"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center text-white pt-20">
                    <h1 className="font-dancing text-4xl md:text-7xl mb-4">
                        Comunícate conmigo
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left: Info & WhatsApp */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Me encantará conocerte y acompañarte en tu camino de crecimiento.
                                Ya sea que estés buscando mejorar tu rutina de skincare, emprender desde casa
                                o formar parte de una comunidad de mujeres que se apoyan y crecen juntas,
                                este es el primer paso.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Estoy aquí para escucharte, orientarte y compartirte mi experiencia con total honestidad y cercanía.
                            </p>
                        </div>

                        <div>
                            <Link
                                href="https://wa.me/15554309383" // Placeholder number from read_url_content (or generic)
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-colors shadow-lg"
                            >
                                <span>Envíanos un mensaje</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.54 1.851.83 3.046.83 3.169 0 5.769-2.586 5.769-5.766 0-3.181-2.59-5.767-5.769-5.767zm0 10.158c-1.002 0-1.876-.289-2.75-.72l-1.61.422.433-1.567c-.504-.848-.846-1.706-.846-2.836 0-2.4 1.96-4.352 4.353-4.352 2.459 0 4.353 1.952 4.353 4.352 0 2.401-1.894 4.353-4.353 4.353zm5.011-6.19c-.279-.139-1.65-.813-1.906-.906-.255-.093-.441-.14-.627.14-.186.279-.721.906-.884 1.093-.163.186-.326.21-.605.07-.279-.14-1.176-.433-2.24-1.382-.828-.738-1.387-1.65-1.549-1.928-.163-.279-.017-.43.122-.569.126-.126.279-.326.419-.489.14-.163.186-.279.279-.465.093-.186.047-.349-.023-.489-.07-.14-.627-1.511-.86-2.069-.227-.544-.457-.47-.627-.478-.163-.008-.349-.008-.535-.008-.186 0-.489.07-.744.349-.256.279-.977.953-.977 2.324 0 1.371.999 2.697 1.139 2.883.14.186 1.966 3.001 4.763 4.208 2.797 1.207 2.797.804 3.308.755.511-.049 1.65-.674 1.883-1.325.232-.651.232-1.209.163-1.325-.07-.116-.256-.186-.535-.326z" /></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Newsletter / Community */}
                    <div className="bg-[var(--primary-beige)]/10 p-8 rounded-2xl border border-[var(--primary-beige)]/30">
                        <h3 className="font-dancing text-4xl mb-6">Quiero unirme a tu comunidad</h3>
                        <p className="text-gray-600 mb-6">
                            Inscríbete a nuestra lista de correo electrónico para recibir actualizaciones, promociones y más.
                        </p>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Tu correo electrónico"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--primary-beige)] bg-white"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white px-6 py-3 rounded-lg uppercase tracking-widest text-sm font-bold hover:bg-[var(--accent-brown)] transition-colors"
                            >
                                Suscribirme
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}
