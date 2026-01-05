"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Post {
    id: string;
    title: string;
    published: boolean;
    createdAt: string;
    author: {
        name: string | null;
        email: string;
    };
    image: string | null;
}

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await fetch("/api/posts");
            if (res.ok) {
                const data = await res.json();
                setPosts(data);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("¿Estás seguro de que quieres eliminar este artículo?")) return;

        try {
            const res = await fetch(`/api/posts/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setPosts(posts.filter((post) => post.id !== id));
            } else {
                alert("Error al eliminar el artículo");
            }
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Error al eliminar");
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Artículos</h1>
                <Link
                    href="/admin/posts/new"
                    className="inline-flex px-6 py-2 bg-[var(--accent-brown)] text-white rounded-lg hover:bg-black transition"
                >
                    Nuevo Artículo
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-500 text-sm uppercase tracking-wider">Título</th>
                            <th className="px-6 py-4 font-medium text-gray-500 text-sm uppercase tracking-wider">Estado</th>
                            <th className="px-6 py-4 font-medium text-gray-500 text-sm uppercase tracking-wider">Fecha</th>
                            <th className="px-6 py-4 font-medium text-gray-500 text-sm uppercase tracking-wider text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {isLoading ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-400">
                                    Cargando artículos...
                                </td>
                            </tr>
                        ) : posts.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-400 italic">
                                    No hay artículos creados aún.
                                </td>
                            </tr>
                        ) : (
                            posts.map((post) => (
                                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {post.image ? (
                                                <div className="relative w-10 h-10 rounded overflow-hidden flex-shrink-0">
                                                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                                                </div>
                                            ) : (
                                                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs">
                                                    No img
                                                </div>
                                            )}
                                            <span className="font-medium text-gray-800">{post.title}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${post.published
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {post.published ? "Publicado" : "Borrador"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 text-sm">
                                        {new Date(post.createdAt).toLocaleDateString("es-ES")}
                                    </td>
                                    <td className="px-6 py-4 text-right space-x-2">
                                        <Link
                                            href={`/admin/posts/${post.id}`}
                                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="text-red-600 hover:text-red-800 text-sm font-medium"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
