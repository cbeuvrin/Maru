"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/admin/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
    }

    if (!session) {
        return null;
    }

    return (

        <div>
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Hola, {session.user?.name} 👋</h1>

            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Total Artículos</h3>
                    <p className="text-3xl font-bold">0</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Suscriptores</h3>
                    <p className="text-3xl font-bold">0</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Visitas (Hoy)</h3>
                    <p className="text-3xl font-bold">-</p>
                </div>
            </div>

            {/* Recent Activity Placeholder */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold mb-4">Actividad Reciente</h2>
                <p className="text-gray-400 text-sm italic">No hay actividad reciente.</p>
            </div>
        </div>
    );
}
