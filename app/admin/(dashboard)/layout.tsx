import Link from "next/link";
import AdminSignOutButton from "@/components/AdminSignOutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/admin/login");
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:block fixed h-full z-10">
                <div className="p-6">
                    <h2 className="font-dancing text-2xl">Maru Cordero</h2>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                        Admin Panel
                    </p>
                </div>
                <nav className="mt-6">
                    <Link
                        href="/admin"
                        className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-[var(--accent-brown)] transition-colors"
                    >
                        Resumen
                    </Link>
                    <Link
                        href="/admin/posts"
                        className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-[var(--accent-brown)] transition-colors"
                    >
                        Artículos
                    </Link>
                    <Link
                        href="/admin/posts/new"
                        className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-[var(--accent-brown)] transition-colors"
                    >
                        Nuevo Artículo
                    </Link>
                    <Link
                        href="/admin/subscribers"
                        className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-[var(--accent-brown)] transition-colors"
                    >
                        Suscriptores
                    </Link>
                </nav>
                <div className="absolute bottom-0 w-64 p-6 border-t border-gray-200 bg-white">
                    <AdminSignOutButton />
                </div>
            </aside>

            <main className="flex-1 p-8 md:ml-64 w-full">
                <div className="max-w-4xl mx-auto">{children}</div>
            </main>
        </div>
    );
}
