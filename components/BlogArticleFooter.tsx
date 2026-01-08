import Link from "next/link";
import { Facebook } from "lucide-react";

export default function BlogArticleFooter({ title, url }: { title: string; url: string }) {
    const encodedUrl = encodeURIComponent(`https://marucordero.com/blog/${url}`);
    const encodedTitle = encodeURIComponent(title);

    return (
        <div className="mt-12 pt-8 border-t border-gray-100">
            {/* CTA Section */}
            <div className="mb-10 text-center md:text-left">
                <p className="font-serif text-lg text-gray-800 italic">
                    👉 Si este contenido resonó contigo, te invito a escribirme y dar el primer paso hacia tu propio camino de crecimiento.
                </p>
                <div className="mt-4">
                    <Link
                        href="/contacto"
                        className="inline-block px-6 py-2 bg-black text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors"
                    >
                        Escríbeme
                    </Link>
                </div>
            </div>

            {/* Share Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                    Compartir esta publicación:
                </span>
                <div className="flex items-center gap-4">
                    {/* X (Twitter) Share */}
                    <a
                        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                        aria-label="Compartir en X"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>

                    {/* Facebook Share */}
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
                        aria-label="Compartir en Facebook"
                    >
                        <Facebook size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
}
