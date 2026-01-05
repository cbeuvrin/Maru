import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-white py-12 mt-20 border-t border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h3 className="font-dancing text-3xl mb-4">Maru Cordero</h3>

                <div className="flex justify-center gap-6 mb-8 text-sm text-[var(--accent-brown)]">
                    <Link href="#">Inicio</Link>
                    <Link href="#">Skincare & Riman</Link>
                    <Link href="#">Comunidad</Link>
                    <Link href="#">Blog - Q&A</Link>
                    <Link href="#">Contacto</Link>
                </div>

                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                    Copyright © 2025 Maru CORDERO - Todos los derechos reservados.
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                    Embajadora RIMAN
                </p>

                <div className="mt-4">
                    <Link href="/admin" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-[var(--accent-brown)] transition-colors">
                        Admin
                    </Link>
                </div>
            </div>
        </footer>
    );
}
