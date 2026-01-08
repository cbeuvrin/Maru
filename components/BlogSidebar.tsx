import Link from "next/link";
import Image from "next/image";

const recentPosts = [
    {
        title: "ICD de Riman: cómo funciona y por qué transformó mi rutina",
        date: "24 de diciembre de 2025",
        slug: "icd-de-riman",
        image: "/blog/post-1.jpg"
    },
    {
        title: "K-Beauty para mujeres reales: cómo empezar sin complicaciones",
        date: "24 de diciembre de 2025",
        slug: "k-beauty-mujeres-reales",
        image: "/blog/post-2.jpg"
    },
    {
        title: "Cómo generar ingresos desde casa con RIMAN",
        date: "24 de diciembre de 2025",
        slug: "ingresos-desde-casa",
        image: "/blog/post-3.jpg"
    },
    {
        title: "Crear una vida con propósito",
        date: "24 de diciembre de 2025",
        slug: "vida-con-proposito",
        image: "/blog/post-4.jpg"
    }
];

export default function BlogSidebar({ currentSlug }: { currentSlug: string }) {
    const filteredPosts = recentPosts.filter(post => post.slug !== currentSlug);

    return (
        <aside className="w-full">
            <h3 className="font-serif text-2xl mb-8 border-b border-gray-100 pb-4">Artículos Recientes</h3>
            <div className="space-y-8">
                {filteredPosts.map((post, idx) => (
                    <div key={idx} className="group">
                        <Link href={`/blog/${post.slug}`} className="flex gap-4 items-start">
                            <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-800 leading-snug mb-2 group-hover:text-[var(--accent-brown)] transition-colors line-clamp-2">
                                    {post.title}
                                </h4>
                                <span className="text-xs text-gray-500">{post.date}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 bg-gray-50 rounded-xl text-center">
                <h3 className="font-dancing text-3xl mb-4">¿Tienes dudas?</h3>
                <p className="text-gray-600 mb-6 text-sm">
                    Si quieres saber más sobre los productos o el negocio, contáctame directamente.
                </p>
                <Link
                    href="/contacto"
                    className="inline-block border border-black px-6 py-2 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                >
                    Contactar
                </Link>
            </div>
        </aside>
    );
}
