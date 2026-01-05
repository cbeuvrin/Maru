import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

// Force dynamic rendering to ensure fresh data
export const dynamic = 'force-dynamic';

export default async function SubscribersPage() {
    const subscribers = await prisma.subscriber.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (

        <div>
            <h1 className="text-3xl font-bold mb-8">Suscriptores ({subscribers.length})</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-500 text-sm uppercase tracking-wider">Email</th>
                            <th className="px-6 py-4 font-medium text-gray-500 text-sm uppercase tracking-wider">Fecha de Suscripción</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {/* Body content remains same, just ensuring correct indentation in replacement */}
                        {subscribers.map((sub) => (
                            <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-gray-700">{sub.email}</td>
                                <td className="px-6 py-4 text-gray-500 text-sm">
                                    {new Date(sub.createdAt).toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </td>
                            </tr>
                        ))}
                        {subscribers.length === 0 && (
                            <tr>
                                <td colSpan={2} className="px-6 py-8 text-center text-gray-400 italic">
                                    Aún no hay suscriptores.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
